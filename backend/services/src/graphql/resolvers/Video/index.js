import { getFileByID } from "../../../database/GetDocs/get-file-by-id.js";
import { getUserByQuery } from "../../../database/GetDocs/get-user-by-query.js";

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
};

