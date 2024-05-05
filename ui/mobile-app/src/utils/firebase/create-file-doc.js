import firestore from '@react-native-firebase/firestore';


export const createFileDoc = async (uploadResponse) => {

    console.log(uploadResponse)

    const database = firestore()

    const newFileRef = database.collection("Files").doc();
    
    if (!newFileRef) {
        throw new Error("Failed to create document reference");
    }

    const data = {
        id: newFileRef.id,
        name: uploadResponse.name,
        path: uploadResponse.url,
        type: uploadResponse.type,
        checksum: "",
        size: uploadResponse.size,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    await newFileRef.set(data);

    const insertedFile = await newFileRef.get().then((doc) => {
        if (doc.exists) {
            return doc.data()
        } else {
            return null
        }
    })

    return insertedFile
};