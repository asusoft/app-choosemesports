import { createPlayerMutationResolver } from './create-player.js';
import { updatePlayerMutationResolver } from './update-player.js';
import { updatePlayerContactMutationResolver } from './update-player-contact.js';
import { updatePlayerPersonalInfoMutationResolver } from './update-player-personal-Info.js';
import { setPlayerSportMutationResolver } from './set-player-sport.js';
import { addPlayerFieldsMutationResolver } from './add-player-additional-fields.js';
import { addPlayerPositionsMutationResolver } from './add-player-positions.js';

export const PlayerMutationResolvers = {
        createPlayer: createPlayerMutationResolver,
        updatePlayer: updatePlayerMutationResolver,
        updatePlayerContact: updatePlayerContactMutationResolver,
        updatePlayerPersonalInfo: updatePlayerPersonalInfoMutationResolver,
        setPlayerSport: setPlayerSportMutationResolver,
        addPlayerAdditionalFields: addPlayerFieldsMutationResolver,
        addPlayerPositions: addPlayerPositionsMutationResolver
};