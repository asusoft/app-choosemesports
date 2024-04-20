import { ErrorStatus } from "../../../../helpers/Constants.js";
import { getUserByQuery } from "../../../../database/GetDocs/get-user-by-query.js";

export const getMeQueryResolver = async (_, __, { user, database }) => {
    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    const me = await getUserByQuery("id", user.id, database)
    
    if(!me) return { status: ErrorStatus.NOT_FOUND}

    return me
};