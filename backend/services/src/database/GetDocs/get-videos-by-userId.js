import { database } from "../../../init-firebase.js";

export const getVideosByUserID = async (userId) => {
    const db = database

    let videos = []

    await db
        .collection("Videos")
        .where('authorID', "==", userId)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                videos.push(doc.data())
            });
        })

    return videos
}