import { v4 } from 'uuid'
import { bucket } from '../../init-firebase.js'
import retry from 'async-retry'

export const FileUpload = async (input) => {

  let uri;

  if (input.uri.startsWith('file://')) {
    uri = input.uri.replace(/^file:\/\//, '');
  } else {
    uri = input.uri;
  }

  const uploadFunction = async () => {
    let folder;

    const lowerCaseType = input.type.toLowerCase();

    if (lowerCaseType.includes("image")) {
      folder = "Images";
    } else if (lowerCaseType.includes("video")) {
      folder = "Videos";
    } else {
      folder = "All";
    }

    try {
      const res = await bucket.upload(uri, {
        destination: `${folder}/${input.name}`,
        metadata: {
          metadata: { firebaseStorageDownloadTokens: v4() }
        },
        resumable: false,
        timeout: 1200000,
        concurrency: 1,
      });
      const file = res[0];
      const signedUrlConfig = { action: 'read', expires: '03-09-2491' };
  
      const [url] = await file.getSignedUrl(signedUrlConfig);
  
      return { url, file: file.metadata };
    } catch (error) {
      console.log(error)
    }
  };

  return retry(uploadFunction, { retries: 3, factor: 2 });
};

