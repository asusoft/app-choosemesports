export const getUserByQuery = async (field, query, db) => {
    const userQuerySnapshot = await db
        .collection("Users")
        .where(field, "==", query).get();

        let user;

        if (!userQuerySnapshot.empty) {
            userQuerySnapshot.forEach((doc) => {
              user = doc.data();
            });
        }

        return user
}