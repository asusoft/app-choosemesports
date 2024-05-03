import { database } from "../../../init-firebase.js";

export const getFileByID = async (id) => {
    const db = database

    const fileQuerySnapshot = await db
        .collection("Files")
        .where('id', "==", id)
        .get();

    let file;

    if (!fileQuerySnapshot.empty) {
        fileQuerySnapshot.forEach((doc) => {
            file = doc.data();
        });
    }

    return file
}