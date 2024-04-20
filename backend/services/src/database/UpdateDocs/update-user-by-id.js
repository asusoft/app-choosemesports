import { database } from "../../../init-firebase.js";

export const updateUserById = async (userID, fields) => {
    const db = database

    console.log(fields)

    try {
        await db.collection("Users").doc(userID).update({
            ...fields
        });
        return true;
    } catch (err) {
        return false;
    }
}