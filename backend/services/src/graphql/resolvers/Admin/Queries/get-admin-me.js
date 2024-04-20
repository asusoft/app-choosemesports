import { getAdminByQuery } from "../../../../database/GetDocs/get-admin-by-query.js";
import { ErrorStatus } from "../../../../helpers/Constants.js";

export const getAdminMeQueryResolver = async (_, __, { user, database }) => {
    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    const adminMe = await getAdminByQuery("id", user.id, database)
    
    if(!adminMe) return { status: ErrorStatus.NOT_FOUND}

    return adminMe
};