import { getAdminByQuery } from "../../../../database/GetDocs/get-admin-by-query.js";
import { getList } from "../../../../database/GetDocs/get-list.js";
import { ErrorStatus } from "../../../../helpers/index.js";

export const getVideoRequestsQueryResolver = async (_, { limit, skip }, { user, database }) => {
    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    const adminMe = await getAdminByQuery("id", user.id, database)
    console.log(adminMe)
    
    if(!adminMe) return { status: ErrorStatus.NOT_ENOUGH_PERMISSIONS}

    const list = await getList('VideoRequests', limit, skip)

    return {
        requests: list,
        total: list.length
    }
   
};