import { getAdminByQuery } from "../../../../database/GetDocs/get-admin-by-query.js";
import { getvideoRequestByID } from "../../../../database/GetDocs/get-video-request-by-id.js";
import { deletItemById } from "../../../../database/UpdateDocs/delete-item-by-id.js";
import { updateVideoById } from "../../../../database/UpdateDocs/update-video-by-id.js";
import { updateVideoRequestById } from "../../../../database/UpdateDocs/update-video-request-by-id.js";
import { ErrorStatus, VideoRequestStatus } from "../../../../helpers/Constants.js";

export const acceptVideoQueryResolver = async (_, { requestID }, { user, database }) => {
    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    const adminMe = await getAdminByQuery("id", user.id, database)
    if(!adminMe) return { status: ErrorStatus.NOT_ENOUGH_PERMISSIONS}

    const request = await getvideoRequestByID(requestID)

    if(request.status === VideoRequestStatus.ACCEPTED) return {status: ErrorStatus.ALREADY_DONE }

    if(request){
        const videoID = request.videoID

        const requestUpdateFields = {
            status: VideoRequestStatus.ACCEPTED,
          
        }
        const videoUpdateFields = {
            isApproved: true,
        }
    
        const videoUpdateResponse = await updateVideoById(videoID, videoUpdateFields)
        const videoReqUpdateResponse = await updateVideoRequestById(requestID, requestUpdateFields)
    
        if(videoUpdateResponse && videoReqUpdateResponse){ 
            await deletItemById('VideoRequests', requestID)
            return null
        }
        else return {status: ErrorStatus.UNKNOWN_ERROR }

    }
};