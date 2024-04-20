import { database } from "../../init-firebase.js";

export const createAdminDoc = async (input) => {
   
    const db = database
    const newAdminRef = db.collection("Admins").doc();

    const data = {
        id: newAdminRef.id,
        login: input.login,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    await newAdminRef.set(data);

    const admin = await newAdminRef.get().then((doc) => {
        if (doc.exists) {
            return doc.data()
        } else {
            return null
        }
    })

    return admin
}