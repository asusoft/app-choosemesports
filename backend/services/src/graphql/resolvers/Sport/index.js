import { getPositionsBySportID } from "../../../database/GetDocs/get-positions-by-sportID.js";

export const SportCustomResolvers = {
    Sport: {
        id: ({ _id, id }) => _id || id,
        positions: async ({ id }) => {
            const pos = await getPositionsBySportID(id)
            if(pos.length > 0) {
                return { total: pos.length, positions: pos};
            } else {
                return null
            }
            
        },
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
    },
    PositionOrBE: {
        __resolveType(obj, _, __){
            if(obj.id){
                return 'Position';
            }
            if(obj.status){
                return 'BaseError';
            }
            return null;
        },
    },
    PositionListOrBE: {
        __resolveType(obj, _, __){
            if (obj.total !== undefined && obj.positions !== undefined){
                return 'PositionList';
            }
            if(obj.status){
                return 'BaseError';
            }
            return null;
        },
    },
    SportListOrBE: {
        __resolveType(obj, _, __){
            if(obj.total){
                return 'SportList';
            }
            if(obj.status){
                return 'BaseError';
            }
            return null;
        },
    },
    UniqueField: {
        __resolveType(obj, _, __){
            if(obj.sportID){
                return 'UniqueField';
            }
            return null;
        },
    },
};

