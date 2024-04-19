import { UserQuery } from './User/index.js';
import { PlayerQuery } from './Player/index.js';
import { FileQuery } from './File/index.js';
import { SportQuery } from './Sport/index.js';
import { AuthQuery } from './Auth/index.js';

export const queries = `
  ${UserQuery}
  ${PlayerQuery}
  ${FileQuery}
  ${SportQuery}
  ${AuthQuery}
`;