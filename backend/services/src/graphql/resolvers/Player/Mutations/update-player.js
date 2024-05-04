import { getPlayerByQuery } from "../../../../database/GetDocs/get-player-by-query.js";
import { updatePlayerById } from "../../../../database/UpdateDocs/update-player-by-id.js";
import { ErrorStatus } from "../../../../helpers/index.js";

export const updatePlayerMutationResolver = async (_, { data }, { user, database }) => {
    if(!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    const playerMe = await getPlayerByQuery("userID", user.id, database)
    
    if(!playerMe) return { status: ErrorStatus.NOT_FOUND}

    const fields = {
        contact: {
            facebook: data.contact?.facebook || playerMe.contact?.facebook || '',
            instagram: data.contact?.instagram || playerMe.contact?.instagram || '',
            phone: data.contact?.phone || playerMe.contact?.phone || '',
            twitter: data.contact?.twitter || playerMe.contact?.twitter || '',
            youtube: data.contact?.youtube || playerMe.contact?.youtube || '',
        },
        personal: {
            dateOfBirth: data.personal?.dateOfBirth || playerMe.personal?.dateOfBirth || '',
            gender: data.personal?.gender || playerMe.personal?.gender || '',
            nationality: {
                country: data.personal?.nationality?.country || playerMe.personal.nationality?.country || '',
                code: data.personal?.nationality?.code || playerMe.personal.nationality?.code
            } || '',
            about: data.personal?.about || playerMe.personal?.about || '',
            height: data.personal?.height || playerMe.personal?.height || '',
            weight: data.personal?.weight || playerMe.personal?.weight || '',
        } 
    }

    const updateResponse = await updatePlayerById(playerMe.id, fields)

    if(updateResponse) return null
    else return {status: ErrorStatus.UNKNOWN_ERROR }
    
}; 