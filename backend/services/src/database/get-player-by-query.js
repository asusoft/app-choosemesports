export const getPlayerByQuery = async (field, query, db) => {
    const userQuerySnapshot = await db
        .collection("Players")
        .where(field, "==", query).get();

        let player;

        if (!userQuerySnapshot.empty) {
            userQuerySnapshot.forEach((doc) => {
              player = doc.data();
            });
        }

        return player
}