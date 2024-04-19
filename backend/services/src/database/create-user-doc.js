import { database } from "../../init-firebase.js";
import { Gender } from "../helpers/Constants.js";


export const createUserDoc = async (id, input) => {
    const db = database

    const newUserRef = db.collection("Users").doc(id);

    const data = {
        id: newUserRef.id,
        name: input.name,
        login: input.login,
        email: input.email,
        role: input.role,
        gender: Gender.MALE,
        avatarID: '',
        bio: '',
        location: input.location,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    await newUserRef.set(data);

    const user = await newUserRef.get().then((doc) => {
        if (doc.exists) {
            return doc.data()
        } else {
            return null
        }
    })

    return user
}