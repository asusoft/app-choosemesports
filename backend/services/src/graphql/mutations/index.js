import { UserMutations } from './User/index.js'
import { FileMutations } from './File/index.js';
import { PlayerMutations } from './Player/index.js';
import { AuthMutations } from './Auth/index.js';
import { SportMutations } from './Sport/index.js';
import { AdminMutations } from './Admin/index.js';

export const mutations = `
  ${UserMutations}
  ${FileMutations}
  ${PlayerMutations}
  ${AuthMutations}
  ${SportMutations}
  ${AdminMutations}
`;