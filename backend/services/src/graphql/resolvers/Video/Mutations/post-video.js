import { ErrorStatus } from "../../../../helpers/index.js";

export const postVideoMutationResolver = async (_, { input }, { user, database }) => {
    console.log('Here')
    if(!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    const newVidRef = database.collection("Videos").doc();
    
    if (!newVidRef) {
        return { status: ErrorStatus.UNKNOWN_ERROR };
    }

    const data = {
        id: newVidRef.id,
        videoID: input.videoID,
        description: input.description || '',
        createdAt: new Date(),
        updatedAt: new Date(),
        authorID: user.id,
        isApproved: false,
        showInProfile: false
    };

    await newVidRef.set(data);

    const createdVideo = await newVidRef.get().then((doc) => {
        if (doc.exists) {
            return doc.data()
        } else {
            return null
        }
    })

    return createdVideo
}; 