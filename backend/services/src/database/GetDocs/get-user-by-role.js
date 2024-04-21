
export const getUserByRole = async (login, role, db) => {
  const userQuerySnapshot = await db
    .collection("Users")
    .where('login', "==", login)
    .where('role', "==", role)
    .get();

  let user;

  if (!userQuerySnapshot.empty) {
    userQuerySnapshot.forEach((doc) => {
      user = doc.data();
    });
  }

  return user
}