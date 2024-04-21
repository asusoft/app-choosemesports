import { database } from "../../../init-firebase.js";

export const createPositionsDoc = async (input) => {
   
    const db = database
    const newPositionRef = db.collection("Positions").doc();

    const data = {
        id: newPositionRef.id,
        name: input.name,
        sportID: input.sportID,
        stats: input.stats
    };

    await newPositionRef.set(data);

    const position = await newPositionRef.get().then((doc) => {
        if (doc.exists) {
            return doc.data()
        } else {
            return null
        }
    })

    return position
}