import { getMeQueryResolver } from "./get-me.js";
import { isEmailExistsQueryResolver } from "./is-email-exist.js";
import { isLoginExistsQueryResolver } from "./is-login-exist.js";
import { isPhoneExistsQueryResolver } from "./is-phone-exist.js";

export const AuthQueriesResolvers = {
   getMe: getMeQueryResolver,
   isPhoneExist: isPhoneExistsQueryResolver,
   isEmailExist: isEmailExistsQueryResolver,
   isLoginExist: isLoginExistsQueryResolver,
};
