import { ErrorStatus } from "../../../../helpers/Constants.js";

export const getNotificationsQueryResolver = async (_, { limit, skip }, { user, database }) => {
    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    let list

    const db = database;

    let query = db.collection('Notifications');

    if (skip) {
        query = query.startAfter(skip);
    }

    query = query.limit(limit);

    const querySnapshot = await query.where("userId", "==", user.id).get();

    list = querySnapshot.docs.map(doc => doc.data());

    return {
        notifications: list,
        total: list.length
    }
   
};