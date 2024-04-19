export const FileCustomResolvers = {
    File: {
        id: ({ _id, id }) => _id || id
    },
    UploadFileResponse: {
        __resolveType(obj, _, __){
            if(obj.type){
                return 'File';
            }
            if(obj.status){
                return 'BaseError';
            }
            return null;
        },
    },
};
