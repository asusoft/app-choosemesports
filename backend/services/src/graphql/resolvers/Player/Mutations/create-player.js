import { ErrorStatus } from "../../../../helpers/index.js";
import { validateInput } from "../../../../helpers/index.js";
import { getUserByQuery } from "../../../../database/GetDocs/get-user-by-query.js";
import { auth } from "../../../../../init-firebase.js";
import { createUserDoc } from "../../../../database/CreateDocs/create-user-doc.js";
import { ERole } from "../../../../helpers/Constants.js";
import { createPlayerDoc } from "../../../../database/CreateDocs/create-player-doc.js";
import { getToken } from "../../../../helpers/index.js";

export const createPlayerMutationResolver = async (_, { input }, { database }) => {
    const isValidInput = await validateInput(input)

    if (isValidInput !== true) return isValidInput

    const loginExist = await getUserByQuery("login", input.login, database)
    const emailExist = await getUserByQuery("email", input.email, database)

    if (loginExist || emailExist) {
        if (emailExist) {
            return { status: ErrorStatus.ALREADY_EXIST, fields: ['email'] };
        } else if (loginExist) {
            return { status: ErrorStatus.ALREADY_EXIST, fields: ['login'] };
        }

    } else { 
        try {
            let user
            await auth.createUser({
                email: input.email,
                emailVerified: true,
                password: input.password,
                displayName: input.login,
            })
                .then(async (userRecord) => {
                    user = await createUserDoc(userRecord.uid, {...input, role: ERole.PLAYER})
                    await createPlayerDoc(user.id, input )
                    console.log('we are here')
                })
            return {
                user,
                token: getToken(user)
            };
        } catch (error) {
            return { status: ErrorStatus.UNKNOWN_ERROR, fields: [''] };
        }
    }
    
}; 


