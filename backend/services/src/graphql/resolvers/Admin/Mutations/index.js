import { changeAdminPasswordMutationResolver } from './change-admin-password.js';
import { adminLoginMutationResolver } from './admin-login.js';
import { adminLogoutMutationResolver } from './admin-logout.js';
import { createAdminMutationResolver } from './create-admin.js';

export const AdminMutationResolvers = {
        createAdmin: createAdminMutationResolver,
        adminLogin: adminLoginMutationResolver,
        adminLogout: adminLogoutMutationResolver,
        changeAdminPassword: changeAdminPasswordMutationResolver,
};