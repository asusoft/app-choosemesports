import { database } from "../../../init-firebase.js";
import { Gender } from "../../helpers/Constants.js";


export const createPlayerDoc = async (userID, input) => {
    const db = database

    const newPlayerRef = db.collection("Players").doc();

    const data = {
        id: newPlayerRef.id,
        userID: userID,
        positions: [],
        contact: {
            phone: '',
            youtube: '',
            facebook: '',
            twitter: '',
            instagram: '',
        },
        personal: {
            dateOfBirth: '',
            gender: Gender.UNKNOWN,
            nationality: {
                country: '',
                code: ''
            },
            height: '',
            weight: '',
            about: ''
        },
        
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