import { ErrorStatus } from "../../../../helpers/index.js";

export const getMyVideosResolver = async (_, __, { user, database }) => {
    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    let videos = []

    const querySnapshot = await database.collection("Videos").where('authorID', "==", user.id).get();

    await Promise.all(querySnapshot.docs.map(async (doc) => {
        let video = doc.data();
        videos.push(video);
    }));

    videos.sort((a, b) => b.updatedAt - a.updatedAt);

    return { total: videos.length, videos} 
};