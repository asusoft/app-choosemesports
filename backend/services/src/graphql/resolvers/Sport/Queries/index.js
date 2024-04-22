import { getSportPositionsQueryResolver } from "./get-sport-positions.js";
import { getSportsQueryResolver } from "./get-sports.js";
import { retrieveSportQueryResolver } from "./retrieve-sport.js";

export const SportQueriesResolvers = {
   retrieveSport: retrieveSportQueryResolver,
   getSportPositions: getSportPositionsQueryResolver,
   getSports: getSportsQueryResolver
};
