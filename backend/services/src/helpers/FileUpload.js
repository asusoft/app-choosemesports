import { v4 } from 'uuid'
import { bucket } from '../../init-firebase.js'
import retry from 'async-retry'

export const FileUpload = async (input) => {
    const uploadFunction = async () => {
      let folder;
  
      const lowerCaseType = input.type.toLowerCase();
  
      if (lowerCaseType.includes("audio")) {
        folder = "Audios";
      } else if (lowerCaseType.includes("image")) {
        folder = "Images";
      } else if (lowerCaseType.includes("video")) {
        folder = "Videos";
      } else {
        folder = "All";
      }
  
      const res = await bucket.upload(input.uri, {
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
    };
  
    return retry(uploadFunction, { retries: 3, factor: 2 });
  };
