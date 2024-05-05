import storage from '@react-native-firebase/storage';

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

    const fileRef = storage().ref(`New/${input.name}`);
   
    const pathToFile = uri

    await fileRef.putFile(pathToFile);

    const url = await fileRef.getDownloadURL()
    const data =  await fileRef.getMetadata()

    return {
        url,
        name: data.name,
        type: data.contentType,
        size: data.size
    }
    
}