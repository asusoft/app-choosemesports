
export const createAndInsertFile = async (uploadResponse, database) => {

    const newFileRef = database.collection("Files").doc();
    
    if (!newFileRef) {
        throw new Error("Failed to create document reference");
    }

    const data = {
        id: newFileRef.id,
        name: uploadResponse.file.name,
        path: uploadResponse.url,
        type: uploadResponse.file.contentType,
        checksum: "",
        size: uploadResponse.file.size,
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