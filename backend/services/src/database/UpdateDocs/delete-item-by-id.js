import { database } from "../../../init-firebase.js";

export const deletItemById = async (collection, id) => {
    const db = database

    const response = await db.collection(collection).doc(id).delete().then(() => {
        return true
    }).catch(() => {
       return false
    });

    return response
}