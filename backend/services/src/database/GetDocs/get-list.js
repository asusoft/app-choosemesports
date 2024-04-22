import { database } from "../../../init-firebase.js";


export const getList = async (collection, limit, skip) => {
    const db = database;

    let lastVisible;

    const firstQuerySnapshot = await db.collection(collection)
        .limit(limit)
        .get();

    if (firstQuerySnapshot.empty) {
        return [];
    }

    lastVisible = firstQuerySnapshot.docs[firstQuerySnapshot.docs.length - 1];

   
    const nextQuerySnapshot = await db.collection(collection)
        .startAfter(lastVisible)
        .limit(limit)
        .get();

    return nextQuerySnapshot.docs.map(doc => doc.data());
}
