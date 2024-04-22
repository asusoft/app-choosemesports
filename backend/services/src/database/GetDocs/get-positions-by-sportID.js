import { database } from "../../../init-firebase.js";

export const getPositionsBySportID = async (sportID) => {
    const db = database

    let positions = []

    await db
        .collection("Positions")
        .where('sportID', "==", sportID)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                positions.push(doc.data())
            });
        })

    return positions
}