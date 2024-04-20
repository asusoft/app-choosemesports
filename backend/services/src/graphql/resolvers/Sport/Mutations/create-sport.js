import { createSportDoc } from "../../../../database/CreateDocs/create-sport-doc.js";
import { ErrorStatus } from "../../../../helpers/index.js";

export const createSportMutationResolver = async (_, { input }, { user }) => {

    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    if (!user.isAdmin) return { status: ErrorStatus.NOT_ENOUGH_PERMISSIONS }

    const sport = await createSportDoc(input)
           
    return sport;

}; 