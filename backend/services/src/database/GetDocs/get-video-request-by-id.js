import { database } from "../../../init-firebase.js";

export const getvideoRequestByID = async (id) => {
    const db = database

    const requestQuerySnapshot = await db
        .collection("VideoRequests")
        .where('id', "==", id)
        .get();

    let request;

    if (!requestQuerySnapshot.empty) {
        requestQuerySnapshot.forEach((doc) => {
            request = doc.data();
        });
    }

    return request
}