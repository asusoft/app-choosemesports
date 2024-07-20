import { changeAdminPasswordMutationResolver } from './change-admin-password.js';
import { adminLoginMutationResolver } from './admin-login.js';
import { adminLogoutMutationResolver } from './admin-logout.js';
import { createAdminMutationResolver } from './create-admin.js';
import { acceptVideoQueryResolver } from './accept-video.js';
import { rejectVideoQueryResolver } from './reject-video.js';

export const AdminMutationResolvers = {
        createAdmin: createAdminMutationResolver,
        adminLogin: adminLoginMutationResolver,
        adminLogout: adminLogoutMutationResolver,
        changeAdminPassword: changeAdminPasswordMutationResolver,
        acceptVideo: acceptVideoQueryResolver,
        rejectVideo: rejectVideoQueryResolver
};