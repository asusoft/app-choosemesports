import { BaseError, ErrorStatus, File } from "@src/shared/generated/types/graphql"
import { createFileDoc } from "./create-file-doc"
import { uploadToBucket } from "./upload-to-bucket"


export const uploadFile = async (input: { uri: string; type: string; name: string; duration?: number | undefined; }): Promise<{ uploadFile: File | BaseError }> => {
    try {
        const uploadResponse: any = await uploadToBucket(input); 

        const response: any = await createFileDoc(uploadResponse);

        if (response.path) {
            return {
                'uploadFile': {
                    '__typename': 'File',
                    ...response
                }
            };
        } else {
            return {
                'uploadFile': {
                    '__typename': 'BaseError',
                    'status': ErrorStatus.UnknownError
                }
            };
        }
    } catch (error) {
        return {
            'uploadFile': {
                '__typename': 'BaseError',
                'status': ErrorStatus.UnknownError
            }
        };
    }
};