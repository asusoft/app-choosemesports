import { database } from "../../init-firebase.js";

export const updatePlayerById = async (player, fields) => {
    const db = database

    try {
        await db.collection("Players").doc(player).update({
            ...fields
        });
        return true;
    } catch (err) {
        return false;
    }
}