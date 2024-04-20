import { getAdminByQuery } from "../../../../database/get-admin-by-query.js";
import { ErrorStatus } from "../../../../helpers/index.js";
// import { getUserByRole } from "../../../../database/get-user-by-role.js";
import { validateLogin, validatePassword } from "../../../../helpers/InputValidation.js";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../../../../firebase-config.js";
import { getToken } from "../../../../helpers/index.js";

export const adminLoginMutationResolver = async (_, { input }, { database }) => {
    console.log(input)
    const isValidPassword = await validatePassword(input.password)
    const isValidLogin = await validateLogin(input.login)

    if (!isValidPassword || !isValidLogin) return { status: ErrorStatus.INVALID_INPUT_DATA }

    const admin = await getAdminByQuery("login", input.login, database)
    
    if (!admin) {
        return { status: ErrorStatus.NOT_FOUND };
    }

    // try {
    //     await signInWithEmailAndPassword(auth, user.email, input.password)
    // } catch (error) {
    //     console.log(error)
    //     return { status: ErrorStatus.INVALID_INPUT_DATA };
    // }

    return {
        user,
        token: getToken(admin)
    };
}; 