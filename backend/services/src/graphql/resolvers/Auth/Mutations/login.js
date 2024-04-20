import { ErrorStatus } from "../../../../helpers/index.js";
import { getUserByRole } from "../../../../database/get-user-by-role.js";
import { validateLogin, validatePassword } from "../../../../helpers/InputValidation.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../firebase-config.js";
import { getToken } from "../../../../helpers/index.js";

export const loginMutationResolver = async (_, { input }, { database }) => {
    const isValidPassword = await validatePassword(input.password)
    const isValidLogin = await validateLogin(input.login)

    if (!isValidPassword || !isValidLogin) return { status: ErrorStatus.INVALID_INPUT_DATA }

    const user = await getUserByRole(input.login, input.role, database)
    
    if (!user) {
        return { status: ErrorStatus.NOT_FOUND};
    }

    try {
        await signInWithEmailAndPassword(auth, user.email, input.password)
    } catch (error) {
        console.log(error)
        return { status: ErrorStatus.INVALID_CREDENTIALS };
    }

    return {
        user,
        token: getToken(user)
    };
}; 