import { database } from "../../../init-firebase.js";

export const createSportDoc = async (input) => {
   
    const db = database
    const newSportRef = db.collection("Sports").doc();

    const data = {
        id: newSportRef.id,
        name: input.name,
    };

    await newSportRef.set(data);

    const sport = await newSportRef.get().then((doc) => {
        if (doc.exists) {
            return doc.data()
        } else {
            return null
        }
    })

    return sport
}