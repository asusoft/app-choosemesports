import { createEnsureRequest, createGraphQLRequest, throwIfNotTypename } from "../utils";
import {
    CreateSportDocument,
    CreatePositionDocument,
    RetrieveSportDocument,
    GetSportPositionsDocument,
    AddSportUniqueFieldDocument,
} from "../../generated/types/graphql"
import { throwIfNotNull } from "../utils/graphql-request";

export const createSport = createGraphQLRequest(CreateSportDocument)
export const createPosition =  createGraphQLRequest(CreatePositionDocument)
export const retrieveSport = createGraphQLRequest(RetrieveSportDocument)
export const getSportPositions = createGraphQLRequest(GetSportPositionsDocument)
export const addSportUniqueField = createGraphQLRequest(AddSportUniqueFieldDocument)

export const createSportAndEnsureOK = createEnsureRequest(
    createSport, 'createSport', throwIfNotTypename('Sport')
)

export const createPositionAndEnsureOK = createEnsureRequest(
    createPosition, 'createPosition', throwIfNotTypename('Position')
)

export const retrieveSportAndEnsureOK = createEnsureRequest(
    retrieveSport, 'retrieveSport', throwIfNotTypename('Sport')
)

export const addSportUniqueFieldAndEnsureOK = createEnsureRequest(
    addSportUniqueField, 'addSportUniqueField', throwIfNotNull
)