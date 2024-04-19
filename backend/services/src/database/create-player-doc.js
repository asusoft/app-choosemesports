import { database } from "../../init-firebase.js";


export const createPlayerDoc = async (userID, input) => {
    const db = database

    const newPlayerRef = db.collection("Players").doc();

    const data = {
        id: newPlayerRef.id,
        userID: userID,
        sportID: input.sportID,
        positions: [],
        dob: input.dob,
        contact: {},
        personal: {},
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    await newPlayerRef.set(data);

    const player = await newPlayerRef.get().then((doc) => {
        if (doc.exists) {
            return doc.data()
        } else {
            return null
        }
    })

    return player
}