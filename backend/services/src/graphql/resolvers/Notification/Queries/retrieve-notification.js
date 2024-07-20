import { getNotificationByID } from "../../../../database/GetDocs/get-notification-by-id.js";
import { ErrorStatus } from "../../../../helpers/Constants.js";


export const retrieveNotificationQueryResolver = async (_, { id }, { user }) => {
    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    const notification = await getNotificationByID(id)
    
    if(!notification) return { status: ErrorStatus.NOT_FOUND}

    return notification
   
};