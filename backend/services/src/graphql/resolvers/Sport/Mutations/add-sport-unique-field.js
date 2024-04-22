import { getSportByID } from "../../../../database/GetDocs/get-sport-by-id.js";
import { updateSportById } from "../../../../database/UpdateDocs/update-sport-by-id.js";
import { ErrorStatus } from "../../../../helpers/index.js";

export const addSportUniqueFieldMutationResolver = async (_, { input }, { user }) => {

    if (!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    if (!user.isAdmin) return { status: ErrorStatus.NOT_ENOUGH_PERMISSIONS }

    const sportToUpdate = await getSportByID(input.sportID)

    if (!sportToUpdate) return { status: ErrorStatus.NOT_FOUND }

    if (sportToUpdate.uniqueFields) {
        const field = { sportID: input.sportID, label: input.label}

        let existingFields = sportToUpdate.uniqueFields

        if (existingFields.includes(field)) {
            return { status: ErrorStatus.ALREADY_DONE }
        } else {
            existingFields.push(field)
        }

        const updateField = {
            uniqueFields: existingFields
        }

        const updateResponse = await updateSportById(input.sportID, updateField)

        if (updateResponse) return null
        else return { fields: ['Unknown'], status: ErrorStatus.UNKNOWN_ERROR }
    } else {
        const field = { sportID: input.sportID, label: input.label}

        let fields = []

        fields.push(field)

        const updateField = {
            uniqueFields: fields
        }

        const updateResponse = await updateSportById(input.sportID, updateField)

        if (updateResponse) return null
        else return { fields: ['Unknown'], status: ErrorStatus.UNKNOWN_ERROR }
    }
}; 