import { database } from "../../../init-firebase.js";

export const createFieldById = async (collection, player, fields) => {
    const db = database

    try {
        await db.collection(collection).doc(player).set({
            ...fields
        });
        return true;
    } catch (err) {
        return false;
    }
}