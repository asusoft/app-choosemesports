import { PlayerContactInUpdate, PlayerIn, PlayerInUpdate, PlayerPersonalInfoIn } from "../../generated/types/graphql";
import { genBirthday, genCountry, genEmail, genGender, genLogin, genName, genPassword, genString, possibleUndefined } from "../utils/gens";

export function genPlayerIn (): PlayerIn {
    return {
        email: genEmail(),
        gender: genGender(),
        location: genCountry(),
        login: genLogin(),
        name: genName(),
        password: genPassword(),
        sportID: genString(),
        dob: genBirthday().toDateString()
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

export function genPlayerPersonalInUpdate (): PlayerPersonalInfoIn {
    return {
        about: genString(),
        height: genString(),
        weight: genString(),
    }
}