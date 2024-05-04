import { UserType } from './user.js';
import { SharedTypes } from './shared.js';
import { FilesType } from './files.js';
import { PlayerTypes } from './player.js';
import { SportTypes } from './sport.js';
import { AuthTypes } from './auth.js';
import { AdminTypes } from './admin.js';
import { VideoTypes } from './video.js';

export const types = `
  ${UserType}
  ${SharedTypes}
  ${FilesType}
  ${PlayerTypes}
  ${SportTypes}
  ${AuthTypes}
  ${AdminTypes}
  ${VideoTypes}
`;