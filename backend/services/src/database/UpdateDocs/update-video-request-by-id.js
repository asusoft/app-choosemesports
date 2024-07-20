import { database } from "../../../init-firebase.js";

export const updateVideoRequestById = async (requestID, fields) => {
    const db = database

    try {
        await db.collection("VideoRequests").doc(requestID).update({
            ...fields
        });
        return true;
    } catch (err) {
        return false;
    }
}