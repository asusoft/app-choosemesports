import { database } from "../../../init-firebase.js";

export const getVideoByID = async (id) => {
    const db = database

    const videosQuerySnapshot = await db
        .collection("Videos")
        .where('id', "==", id)
        .get();

    let videos;

    if (!videosQuerySnapshot.empty) {
        videosQuerySnapshot.forEach((doc) => {
            videos = doc.data();
        });
    }

    return videos
}