import { getPlayerByQuery } from "../../../../database/GetDocs/get-player-by-query.js";
import { updatePlayerById } from "../../../../database/UpdateDocs/update-player-by-id.js";
import { ErrorStatus } from "../../../../helpers/index.js";

export const addPlayerPersonalInfoMutationResolver = async (_, { data }, { user, database }) => {

    if(!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    const playerMe = await getPlayerByQuery("userID", user.id, database)

    
    if(!playerMe) return { status: ErrorStatus.NOT_FOUND}

    const fields = {
        personal: {
            dateOfBirth: data.dateOfBirth || playerMe.personal.dateOfBirth,
            gender: data.gender || playerMe.personal.gender,
            nationality: {
                country: data.nationality.country || playerMe.personal.nationality.country,
                code: data.nationality.code || playerMe.personal.nationality.code
            },
            about: data.about || playerMe.personal.about,
            height: data.height || playerMe.personal.height,
            weight: data.weight || playerMe.personal.weight,
        } 
    }

    const updateResponse = await updatePlayerById(playerMe.id, fields)

    if(updateResponse) return null
    else return {status: ErrorStatus.UNKNOWN_ERROR }
    
}; 