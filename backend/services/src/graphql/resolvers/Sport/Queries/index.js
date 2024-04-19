import { getSportPositionsQueryResolver } from "./get-sport-positions.js";
import { retrieveSportQueryResolver } from "./retrieve-sport.js";

export const SportQueriesResolvers = {
   retrieveSport: retrieveSportQueryResolver,
   getSportPositions: getSportPositionsQueryResolver
};
