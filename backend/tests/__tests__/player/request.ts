import { createEnsureRequest, createGraphQLRequest, throwIfNotTypename } from "../utils";
import {
    CreatePlayerDocument,
    GetPlayerMeDocument,
    RetrievePlayerDocument,
    UpdatePlayerDocument
} from "../../generated/types/graphql"
import { throwIfNotNull } from "../utils/graphql-request";

export const createPlayer = createGraphQLRequest(CreatePlayerDocument)
export const retrievePlayer =  createGraphQLRequest(RetrievePlayerDocument)
export const getPlayerMe = createGraphQLRequest(GetPlayerMeDocument)
export const updatePlayer = createGraphQLRequest(UpdatePlayerDocument)

export const createPlayerEnsureOK = createEnsureRequest(
    createPlayer, 'createPlayer', throwIfNotTypename('AuthUser')
)

export const getPlayerMeAndEnsureOK = createEnsureRequest(
    getPlayerMe, 'getPlayerMe', throwIfNotTypename('Player')
)

export const retrievePlayerAndEnsureOK = createEnsureRequest(
    retrievePlayer, 'retrievePlayer', throwIfNotTypename('Player')
)

export const updatePlayerEnsureOK = createEnsureRequest(
    updatePlayer, 'updatePlayer', throwIfNotNull
)

