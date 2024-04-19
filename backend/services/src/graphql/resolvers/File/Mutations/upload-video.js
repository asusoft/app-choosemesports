import { ErrorStatus } from "../../../../helpers/Constants.js";
import { FileUpload } from "../../../../helpers/FileUpload.js";
import { createAndInsertFile } from "../create-and-insert-file.js";

export const uploadVideoResolver = async (_, { file }, { user, database }) => {
    if(!user) return { status: ErrorStatus.NOT_AUTHENTICATED };

    if(!user.isScholar) return { status: ErrorStatus.NOT_ENOUGH_PERMISSIONS}

    const uploadResponse = await FileUpload(file);

    if (uploadResponse) {
        const insertResponse = await createAndInsertFile( uploadResponse, database);

        if (insertResponse) {
            return insertResponse;
        }
    }

};