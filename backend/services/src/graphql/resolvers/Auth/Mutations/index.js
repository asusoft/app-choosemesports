import { changePasswordMutationResolver } from './change-password.js';
import { loginMutationResolver } from './login.js';
import { logoutMutationResolver } from './logout.js';

export const AuthMutationResolvers = {
        login: loginMutationResolver,
        logout: logoutMutationResolver,
        changePassword: changePasswordMutationResolver,
};