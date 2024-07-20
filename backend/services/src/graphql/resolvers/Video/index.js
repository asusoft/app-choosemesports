import { getFileByID } from "../../../database/GetDocs/get-file-by-id.js";
import { getUserByQuery } from "../../../database/GetDocs/get-user-by-query.js";
import { getVideoByID } from "../../../database/GetDocs/get-video-by-id.js";

export const VideoCustomResolvers = {
    Video: {
        id: ({ _id, id }) => _id || id,
        author: async ({ authorID }, __, { database }) => {
            if (!authorID) {
                return undefined;
            }
            return await getUserByQuery('id', authorID, database) 
        },
        attachement: async ({ videoID }) => {
            if (!videoID) {
                return undefined;
            }
            return await getFileByID(videoID);
        },
    },
    VideoOrBE: {
        __resolveType(obj, _, __){
            if(obj.id){
                return 'Video';
            }
            if(obj.status){
                return 'BaseError';
            }
            return null;
        },
    },
    VideoListOrBE: {
        __resolveType(obj, _, __) {
            if (obj.total !== undefined && obj.videos !== undefined) {
                return 'VideoList';
            }
            if (obj.status) {
                return 'BaseError';
            }
        },
    },
    VideoRequestListOrBE: {
        __resolveType(obj, _, __) {
            if (obj.total !== undefined && obj.requests !== undefined) {
                return 'VideoRequestList';
            }
            if (obj.status) {
                return 'BaseError';
            }
        },
    },
    VideoRequestList: {
        requests: async (obj, _, { database }) => {
            return await Promise.all(
                obj.requests.map(async (request) => {
                    const video = await getVideoByID(request.videoID, database);
                    return {
                        ...request,
                        video,
                    };
                })
            );
        },
    },
    VideoRequestOrBE: {
        __resolveType(obj) {
            if (obj.id) {
                return 'VideoRequest';
            }
            if (obj.status) {
                return 'BaseError';
            }
            return null;
        },
    },
    VideoRequest: {
        video: async (videoRequest, _, { database }) => {
            if (!videoRequest.videoID) {
                return null;
            }
            return await getVideoByID(videoRequest.videoID, database);
        },
        requestStatus: (videoRequest, _, __) =>  videoRequest.status
    },
};

