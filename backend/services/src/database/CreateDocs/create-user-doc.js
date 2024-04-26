import { database } from "../../../init-firebase.js";


export const createUserDoc = async (id, input) => {
    const db = database
    const newUserRef = db.collection("Users").doc(id);

    const data = {
        id: newUserRef.id,
        name: input.name,
        login: input.login,
        email: input.email,
        role: input.role,
        avatarID: '',
        bio: '',
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