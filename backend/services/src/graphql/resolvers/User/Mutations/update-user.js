import { updateUserById } from "../../../../database/update-user-by-id.js";
import { ErrorStatus } from "../../../../helpers/index.js";
import { validateEmail, validateLogin, validateString } from "../../../../helpers/InputValidation.js";


export const updateUserMutationResolver = async (_, { data }, { user }) => {
    if(!user) return { status: ErrorStatus.NOT_AUTHENTICATED, fields: [''] };

    if(data.email) {
        const isValidEmail = await validateEmail(data.email)
        if(!isValidEmail) return {status: ErrorStatus.INVALID_INPUT_DATA, fields: ['email'] }
    }

    if(data.login) {
        const isValidLogin = await validateLogin(data.login)
        if(!isValidLogin) return {status: ErrorStatus.INVALID_INPUT_DATA, fields: ['login'] }
    }

    if(data.bio) {
        const isValidBio = await validateString(data.bio)
        if(!isValidBio) return {status: ErrorStatus.INVALID_INPUT_DATA, fields: ['bio'] }
    }

    const fields = {
        bio: data?.bio || user.bio,
        email: data?.email || user.email,
        login: data?.login || user.login,
    }

    const updateResponse = await updateUserById(user.id, fields)

    if(updateResponse) return null
    else return {status: ErrorStatus.UNKNOWN_ERROR }
    
}; 
