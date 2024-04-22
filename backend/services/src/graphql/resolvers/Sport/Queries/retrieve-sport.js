import { getSportByID } from "../../../../database/GetDocs/get-sport-by-id.js";
import { ErrorStatus } from "../../../../helpers/Constants.js";


export const retrieveSportQueryResolver = async (_, { id }, { user }) => {
    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };
    
    const sport = await getSportByID(id)
    
    if(!sport) return { status: ErrorStatus.NOT_FOUND}

    return sport
   
};