import { createAdminDoc } from "../../../../database/CreateDocs/create-admin-doc.js";
import { getAdminByQuery } from "../../../../database/GetDocs/get-admin-by-query.js";
import { ErrorStatus } from "../../../../helpers/Constants.js";
import { validateLogin, validatePassword } from "../../../../helpers/InputValidation.js";
import { getToken } from "../../../../helpers/tokenization.js";

export const createAdminMutationResolver = async (_, { input }, { database }) => {
    const isValidPassword = await validatePassword(input.password)
    const isValidLogin = await validateLogin(input.login)

    if (!isValidPassword) return { fields: ['password'], status: ErrorStatus.INVALID_INPUT_DATA }
    if (!isValidLogin) return { fields: ['login'], status: ErrorStatus.INVALID_INPUT_DATA }

    const loginExist = await getAdminByQuery("login", input.login, database)

    if (loginExist) {
        return { status: ErrorStatus.ALREADY_EXIST, fields: ['login'] };
    } else { 
        try {
            const admin = await createAdminDoc(input)
           
            return {
                admin,
                token: getToken(admin)
            };
        } catch (error) {
            return { status: ErrorStatus.UNKNOWN_ERROR, fields: [''] };
        }
    }
    
}; 


