import { getAdminByQuery } from "../../../../database/GetDocs/get-admin-by-query.js";
import { getVideoByID } from "../../../../database/GetDocs/get-video-by-id.js";
import { getvideoRequestByID } from "../../../../database/GetDocs/get-video-request-by-id.js";
import { deletItemById } from "../../../../database/UpdateDocs/delete-item-by-id.js";
import { updateVideoById } from "../../../../database/UpdateDocs/update-video-by-id.js";
import { updateVideoRequestById } from "../../../../database/UpdateDocs/update-video-request-by-id.js";
import { ErrorStatus, VideoRequestStatus, ENotificationType, VRejectionReason } from "../../../../helpers/Constants.js";
import { createNotification } from "../../../../database/CreateDocs/create-notification-doc.js";

export const rejectVideoQueryResolver = async (_, { input }, { user, database }) => {
    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    const adminMe = await getAdminByQuery("id", user.id, database)
    if(!adminMe) return { status: ErrorStatus.NOT_ENOUGH_PERMISSIONS}

    const request = await getvideoRequestByID(input.requestID)

    if(request.status === VideoRequestStatus.REJECTED) return {status: ErrorStatus.ALREADY_DONE }

    if(request){
        const videoID = request.videoID

        const requestUpdateFields = {
            status: VideoRequestStatus.REJECTED,
        }
        const videoUpdateFields = {
            isApproved: false,
        }
    
        const videoUpdateResponse = await updateVideoById(videoID, videoUpdateFields)
        const videoReqUpdateResponse = await updateVideoRequestById(input.requestID, requestUpdateFields)
        const video = await getVideoByID(videoID)

        let message

        switch (input.reason) {
            case VRejectionReason.DURATION:
                message = `Hello, your video has been rejected because the duration 
                has exceeded the recommended value and 
                has been deleted. Please upload another video with shorter duration.`
                break;
            case VRejectionReason.QUALITY:
                message = `Hello, your video has been rejected because it has very low quality and 
                has been deleted. Please upload another video with better quality.`
                break;
            case VRejectionReason.VIOLATION_OF_POLICY:
                message = `Hello, your video has been rejected because it does not follow our guidelines and 
                has been deleted. Please read our video uploading guidlines and upload another video.`
                break;
            default:
                break;
        }

        if(videoUpdateResponse && videoReqUpdateResponse){ 
            const notificationInput = {
                type: ENotificationType.VIDEO_REJECTION,
                title: 'Your Video is rejected',
                text: message,
                userId: video.authorID
            }
            await createNotification(notificationInput)
            await deletItemById('VideoRequests', input.requestID)
            await deletItemById('Videos', videoID)
            return null
        }
        else return {status: ErrorStatus.UNKNOWN_ERROR }

    }
};