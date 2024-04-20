import { AdminIn } from "../../generated/types/graphql";
import { genLogin, genPassword } from "../utils/gens";

export function genAdminIn (): AdminIn {
    return {
        login: genLogin(),
        password: genPassword(),
    }
}