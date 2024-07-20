import { database } from "../../../init-firebase.js";

export const getNotificationByID = async (id) => {
    const db = database

    const notificationQuerySnapshot = await db
        .collection("Notifications")
        .where('id', "==", id)
        .get();

    let notification;

    if (!notificationQuerySnapshot.empty) {
        notificationQuerySnapshot.forEach((doc) => {
            notification = doc.data();
        });
    }

    return notification
}