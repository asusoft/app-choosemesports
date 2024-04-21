import { database } from "../../../init-firebase.js";

export const getSportByID = async (id) => {
    const db = database

    const sportQuerySnapshot = await db
        .collection("Sports")
        .where('id', "==", id)
        .get();

    let sport;

    if (!sportQuerySnapshot.empty) {
        sportQuerySnapshot.forEach((doc) => {
            sport = doc.data();
        });
    }

    return sport
}