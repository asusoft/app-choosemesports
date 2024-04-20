import { createEnsureRequest, createGraphQLRequest, throwIfNotTypename } from "../utils";
import {
    UpdateUserDocument,
    RetrieveUserDocument
} from "../../generated/types/graphql"

export const retrieveUser =  createGraphQLRequest(RetrieveUserDocument)
export const updateUser = createGraphQLRequest(UpdateUserDocument)

export const retrieveUserAndEnsureOK = createEnsureRequest(
    retrieveUser, 'retrieveUser', throwIfNotTypename('User')
)

