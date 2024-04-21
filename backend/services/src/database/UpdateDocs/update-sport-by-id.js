import { database } from "../../../init-firebase.js";

export const updateSportById = async (sportID, fields) => {
    const db = database

    console.log('db')

    try {
        await db.collection("Sports").doc(sportID).update({
            ...fields
        });
        return true;
    } catch (err) {
        return false;
    }
}