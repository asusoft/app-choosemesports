import { getPlayerByQuery } from "../../../../database/GetDocs/get-player-by-query.js";
import { updatePlayerById } from "../../../../database/UpdateDocs/update-player-by-id.js";
import { ErrorStatus } from "../../../../helpers/index.js";

export const setPlayerSportMutationResolver = async (_, { id }, { user, database }) => {

    if(!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    const playerMe = await getPlayerByQuery("userID", user.id, database)
    
    if(!playerMe) return { status: ErrorStatus.NOT_FOUND}

    const fields = {
        sportID: id
    }

    const updateResponse = await updatePlayerById(playerMe.id, fields)

    if(updateResponse) return null
    else return {status: ErrorStatus.UNKNOWN_ERROR }
    
}; 