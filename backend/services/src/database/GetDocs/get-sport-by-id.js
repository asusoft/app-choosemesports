export const getSportByID = async (id, db) => {
    // const userQuerySnapshot = await db
    //     .collection("Players")
    //     .where(field, "==", query).get();

    //     let player;

    //     if (!userQuerySnapshot.empty) {
    //         userQuerySnapshot.forEach((doc) => {
    //           player = doc.data();
    //         });
    //     }

    const sport = {
        id: id,
        name: 'Football'
    }

    return sport
}