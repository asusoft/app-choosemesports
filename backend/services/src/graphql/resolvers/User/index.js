import { getFileByID } from "../../../database/GetDocs/get-file-by-id.js";

export const UserCustomResolvers = {
    User: {
        id: ({ _id, id }) => _id || id,
        avatar: async ({ avatarID }) => {
            if (!avatarID) {
                return undefined;
            }
            return await getFileByID(avatarID);
        },
    },
    UserOrBE: {
        __resolveType(obj, _, __){
            if(obj.login){
                return 'User';
            }
            if(obj.status){
                return 'BaseError';
            }
            return null;
        },
    },
    AuthUserOrEWF: {
        __resolveType(obj, _, __){
            if(obj.token){
                return 'AuthUser';
            }

            if(obj.status){
                return 'ErrorWithFields';
            }
            return null;
        },
    },
    AuthUserOrBE: {
        __resolveType(obj, _, __){
            if(obj.token){
                return 'AuthUser';
            }

            if(obj.status){
                return 'BaseError';
            }

            return null;
        },
    },
};

