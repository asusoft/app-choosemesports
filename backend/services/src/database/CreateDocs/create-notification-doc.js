import { database } from "../../../init-firebase.js";

export const createNotification = async (input) => {
    const db = database
    const newNotificationRef = db.collection("Notifications").doc();

    const data = {
        id: newNotificationRef.id,
        type: input.type,
        text: input.text,
        title: input.title,
        userId: input.userId,
        createdAt:  new Date(),
    };

    await newNotificationRef.set(data);

    const notification = await newNotificationRef.get().then((doc) => {
        if (doc.exists) {
            return doc.data()
        } else {
            return null
        }
    })

    return notification
}