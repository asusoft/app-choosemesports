import { getSportByID } from "../../../database/get-sport-by-id.js";

export const PlayerCustomResolvers = {
    Player: {
        id: ({ _id, id }) => _id || id,
        sport: async ({ sportID }, __, { database }) => await getSportByID(sportID, database),
    },
    PlayerOrBE: {
        __resolveType(obj, _, __){
            if(obj.userID){
                return 'Player';
            }
            if(obj.status){
                return 'BaseError';
            }
            return null;
        },
    },
};
