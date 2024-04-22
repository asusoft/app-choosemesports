import { database } from "../../../init-firebase.js";

export const updateSportById = async (sportID, fields) => {
    const db = database

    try {
        await db.collection("Sports").doc(sportID).update({
            ...fields
        });
        return true;
    } catch (err) {
        return false;
    }
}