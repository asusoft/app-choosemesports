import storage from '@react-native-firebase/storage';
import { createThumbnail } from 'react-native-create-thumbnail';

export const uploadToBucket = async (input) => {
    let uri;

    if (input.uri.startsWith('file://')) {
        uri = input.uri.replace(/^file:\/\//, '');
    } else {
        uri = input.uri;
    }

    let folder;

    const lowerCaseType = input.type.toLowerCase();

    if (lowerCaseType.includes("image")) {
        folder = "Images";
    } else if (lowerCaseType.includes("video")) {
        folder = "Videos";
    } else {
        folder = "All";
    }

    const fileRef = storage().ref(`${folder}/${input.name}`);
   
    const pathToFile = uri

    await fileRef.putFile(pathToFile);

    const url = await fileRef.getDownloadURL()
    const data =  await fileRef.getMetadata()

    let thumbnailUrl = '';
    if (lowerCaseType.includes("video")) {
        const thumbnail = await createThumbnail({ url: input.uri });
        const thumbnailRef = storage().ref(`Thumbnails/${input.name}.jpg`);
        await thumbnailRef.putFile(thumbnail.path);
        thumbnailUrl = await thumbnailRef.getDownloadURL();
    }


    return {
        url,
        name: data.name,
        type: data.contentType,
        size: data.size,
        thumbnailUrl
    }
    
}