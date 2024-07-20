import { database } from "../../../init-firebase.js";

export const updateVideoById = async (videoID, fields) => {
    const db = database

    try {
        await db.collection("Videos").doc(videoID).update({
            ...fields
        });
        return true;
    } catch (err) {
        return false;
    }
}