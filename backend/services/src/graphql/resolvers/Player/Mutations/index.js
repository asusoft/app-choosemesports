import { createPlayerMutationResolver } from './create-player.js';
import { updatePlayerContactMutationResolver } from './update-player-contact.js';
import { updatePlayerPersonalInfoMutationResolver } from './update-player-personal-Info.js';

export const PlayerMutationResolvers = {
        createPlayer: createPlayerMutationResolver,
        updatePlayerContact: updatePlayerContactMutationResolver,
        updatePlayerPersonalInfo: updatePlayerPersonalInfoMutationResolver
};