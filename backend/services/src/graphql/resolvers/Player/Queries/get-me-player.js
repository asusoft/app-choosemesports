import { getPlayerByQuery } from "../../../../database/GetDocs/get-player-by-query.js";
import { ErrorStatus } from "../../../../helpers/Constants.js";


export const getMePlayerQueryResolver = async (_, __, { user, database }) => {
    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    const playerMe = await getPlayerByQuery("userID", user.id, database)
    
    if(!playerMe) return { status: ErrorStatus.NOT_FOUND}

    return playerMe
};