import { UserInUpdate } from "../../generated/types/graphql";
import {  genEmail, genLogin, genString } from "../utils/gens";


export function genUserInUpdate (): UserInUpdate {
    return {
        bio: genString(),
        email: genEmail(),
        login: genLogin(),
        avatarID: genString()
    }
}
