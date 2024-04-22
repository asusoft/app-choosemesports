import { getList } from "../../../../database/GetDocs/get-list.js";
import { ErrorStatus } from "../../../../helpers/Constants.js";

export const getSportsQueryResolver = async (_, { limit, skip }, { user }) => {
    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    const list = await getList('Sports', limit, skip)

    return {
        sports: list,
        total: list.length
    }
   
};