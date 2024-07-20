import { getAdminByQuery } from "../../../../database/GetDocs/get-admin-by-query.js";
import { getvideoRequestByID } from "../../../../database/GetDocs/get-video-request-by-id.js";
import { ErrorStatus } from "../../../../helpers/Constants.js";


export const retrieveVideoRequestQueryResolver = async (_, { id }, { user, database }) => {
    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    const adminMe = await getAdminByQuery("id", user.id, database)
    
    if(!adminMe) return { status: ErrorStatus.NOT_ENOUGH_PERMISSIONS}

    const request = await getvideoRequestByID(id)
    
    if(!request) return { status: ErrorStatus.NOT_FOUND}

    return request
   
};