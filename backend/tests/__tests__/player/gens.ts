import { PlayerContactInUpdate, PlayerIn, PlayerInUpdate, PlayerPersonalInfoIn, PlayerPersonalInfoInUpdate } from "../../generated/types/graphql";
import {  genEmail, genLogin, genName, genPassword, genString, possibleUndefined } from "../utils/gens";

export function genPlayerIn (): PlayerIn {
    return {
        email: genEmail(),
        login: genLogin(),
        name: genName(),
        password: genPassword(),
    }
}

export function genPlayerInUpdate (): PlayerInUpdate {
    return {
        contact: genPlayerContactInUpdate(),
        personal:  possibleUndefined(genPlayerPersonalInUpdate()),
    }
}

export function genPlayerContactInUpdate (): PlayerContactInUpdate {
    return {
        facebook: genLogin(),
        instagram: genLogin(),
        phone: genLogin(),
        twitter: genLogin(),
        youtube: genLogin(),
    }
}

export function genPlayerPersonalInUpdate (): PlayerPersonalInfoInUpdate {
    return {
        about: genString(),
        height: genString(),
        weight: genString(),
    }
}