export const AdminCustomResolvers = {
    AdminOrBE: {
        __resolveType(obj, _, __){
            if(obj.login){
                return 'Admin';
            }
            if(obj.status){
                return 'BaseError';
            }
            return null;
        },
    },
    AuthAdminOrEWF: {
        __resolveType(obj, _, __){
            if(obj.token){
                return 'AuthAdmin';
            }

            if(obj.status){
                return 'ErrorWithFields';
            }
            return null;
        },
    },
    AuthAdminOrBE: {
        __resolveType(obj, _, __){
            if(obj.token){
                return 'AuthAdmin';
            }

            if(obj.status){
                return 'BaseError';
            }

            return null;
        },
    },
};

