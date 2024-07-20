import { VideoRequestStatus } from "../../../../helpers/Constants.js";
import { ErrorStatus } from "../../../../helpers/index.js";

export const requestVideoApprovalMutationResolver = async (_, { id }, { user, database }) => {
    if(!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    const newVidApprovalRef = database.collection("VideoRequests").doc();
    
    if (!newVidApprovalRef) {
        return { status: ErrorStatus.UNKNOWN_ERROR };
    }

    const data = {
        id: newVidApprovalRef.id,
        videoID: id,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: VideoRequestStatus.PENDING
    };

   

    await newVidApprovalRef.set(data);

    await newVidApprovalRef.get().then((doc) => {
        if (doc.exists) {
            return null
        } else {
            return { status: ErrorStatus.UNKNOWN_ERROR }
        }
    })

    return null
}; 