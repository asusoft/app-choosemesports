export const getAdminByQuery = async (field, query, db) => {

  console.log('getting admin')

  const userQuerySnapshot = await db
    .collection("Admins")
    .where(field, "==", query).get();

  let user;

  if (!userQuerySnapshot.empty) {
    userQuerySnapshot.forEach((doc) => {
      user = doc.data();
    });
  }

  return user
}