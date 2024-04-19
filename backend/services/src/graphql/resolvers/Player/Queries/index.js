import { getMePlayerQueryResolver } from "./get-me-player.js";
import { getPlayersQueryResolver } from "./get-players.js";
import { retrievePlayerQueryResolver } from "./retrieve-player.js";

export const PlayerQueriesResolvers = {
   getPlayerMe: getMePlayerQueryResolver,
   retrievePlayer: retrievePlayerQueryResolver,
   getPlayers: getPlayersQueryResolver
};
