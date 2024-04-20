import { createPlayerMutationResolver } from './create-player.js';
import { updatePlayerMutationResolver } from './update-player.js';
import { updatePlayerContactMutationResolver } from './update-player-contact.js';
import { updatePlayerPersonalInfoMutationResolver } from './update-player-personal-Info.js';

export const PlayerMutationResolvers = {
        createPlayer: createPlayerMutationResolver,
        updatePlayer: updatePlayerMutationResolver,
        updatePlayerContact: updatePlayerContactMutationResolver,
        updatePlayerPersonalInfo: updatePlayerPersonalInfoMutationResolver
};