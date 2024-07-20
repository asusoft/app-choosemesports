import { createNotification } from "../../../../database/CreateDocs/create-notification-doc.js";
import { getAdminByQuery } from "../../../../database/GetDocs/get-admin-by-query.js";
import { getVideoByID } from "../../../../database/GetDocs/get-video-by-id.js";
import { getvideoRequestByID } from "../../../../database/GetDocs/get-video-request-by-id.js";
import { deletItemById } from "../../../../database/UpdateDocs/delete-item-by-id.js";
import { updateVideoById } from "../../../../database/UpdateDocs/update-video-by-id.js";
import { updateVideoRequestById } from "../../../../database/UpdateDocs/update-video-request-by-id.js";
import { ErrorStatus, VideoRequestStatus, ENotificationType } from "../../../../helpers/Constants.js";

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
        const video = await getVideoByID(videoID)
    
        if(videoUpdateResponse && videoReqUpdateResponse){ 
            const notificationInput = {
                type: ENotificationType.VIDEO_ACCEPTANCE,
                title: 'Your Video is accepted',
                text: `Hello, your video has been accepted and can now be watched by everyone.`,
                userId: video.authorID
            }
            await createNotification(notificationInput)
            await deletItemById('VideoRequests', requestID)
            return null
        }
        else return {status: ErrorStatus.UNKNOWN_ERROR }

    }
};