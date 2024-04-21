import { createPositionsDoc } from "../../../../database/CreateDocs/create-position-doc.js";
import { ErrorStatus } from "../../../../helpers/index.js";

export const createPositionMutationResolver = async (_, { input }, { user }) => {

    console.log('called')
    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    if (!user.isAdmin) return { status: ErrorStatus.NOT_ENOUGH_PERMISSIONS }

    const position = await createPositionsDoc(input)
           
    return position;

}; 