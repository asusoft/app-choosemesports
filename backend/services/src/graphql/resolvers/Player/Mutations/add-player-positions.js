import { getPlayerByQuery } from "../../../../database/GetDocs/get-player-by-query.js";
import { updatePlayerById } from "../../../../database/UpdateDocs/update-player-by-id.js";
import { ErrorStatus } from "../../../../helpers/index.js";

export const addPlayerPositionsMutationResolver = async (_, { data }, { user, database }) => {
    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };
    
    try {
        const playerMe = await getPlayerByQuery("userID", user.id, database);
        
        if (!playerMe) return { status: ErrorStatus.NOT_FOUND };

        let fields;
        
        if (playerMe.positions) {
            fields = {
                playerPositions: [...playerMe.positions, ...data.positions]
            };
        } else {
            fields = {
                playerPositions: data.positions
            };
        }

        const updateResponse = await updatePlayerById(playerMe.id, fields);

        if (updateResponse) {
            return null;
        } else {
            return { status: ErrorStatus.UNKNOWN_ERROR };
        }
    } catch (error) {
        console.error("Error adding player positions:", error);
        return { status: ErrorStatus.UNKNOWN_ERROR };
    }
};