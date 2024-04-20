
export const SportCustomResolvers = {
    Sport: {
        id: ({ _id, id }) => _id || id,
    },
    SportOrBE: {
        __resolveType(obj, _, __){
            if(obj.id){
                return 'Sport';
            }
            if(obj.status){
                return 'BaseError';
            }
            return null;
        },
    }
};

