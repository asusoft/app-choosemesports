import { database } from "../../../init-firebase.js";


export const getList = async (collection, limit, skip) => {
    const db = database;

    let query = db.collection(collection).orderBy('id');

    if (skip) {
        query = query.startAfter(skip);
    }

    query = query.limit(limit);

    const querySnapshot = await query.get();

    return querySnapshot.docs.map(doc => doc.data());
}
