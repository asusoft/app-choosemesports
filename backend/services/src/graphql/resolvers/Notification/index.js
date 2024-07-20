
export const NotificationCustomResolvers = {
    NotificationOrBE: {
        __resolveType(obj, _, __){
            if(obj.id){
                return 'Notification';
            }
            if(obj.status){
                return 'BaseError';
            }
            return null;
        },
    },
    NotificationListOrBE: {
        __resolveType(obj, _, __){
            console.log(obj)
            if(obj.total){
                return 'NotificationList';
            }
            if(obj.status){
                return 'BaseError';
            }
            return null;
        },
    },
};

