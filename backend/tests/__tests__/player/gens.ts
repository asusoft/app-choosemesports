import { PlayerIn } from "../../generated/types/graphql";
import { genBirthday, genCountry, genEmail, genGender, genLogin, genName, genPassword, genString } from "../utils/gens";

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