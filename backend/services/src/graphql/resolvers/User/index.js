export const UserCustomResolvers = {
    User: {
        id: ({ _id, id }) => _id || id,
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

