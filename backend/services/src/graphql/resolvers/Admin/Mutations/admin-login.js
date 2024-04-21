import { getAdminByQuery } from "../../../../database/GetDocs/get-admin-by-query.js";
import { ErrorStatus } from "../../../../helpers/index.js";
import { validateLogin, validatePassword } from "../../../../helpers/InputValidation.js";
import { getToken } from "../../../../helpers/index.js";

export const adminLoginMutationResolver = async (_, { input }, { database }) => {
    
    const isValidPassword = await validatePassword(input.password)
    const isValidLogin = await validateLogin(input.login)

    if (!isValidPassword || !isValidLogin) return { status: ErrorStatus.INVALID_INPUT_DATA }

    const admin = await getAdminByQuery("login", input.login, database)
    
    if (!admin) {
        return { status: ErrorStatus.INVALID_CREDENTIALS };
    }

    if(admin.password !== input.password) return { status: ErrorStatus.INVALID_CREDENTIALS };

    return {
        admin,
        token: getToken(admin)
    };
}; 