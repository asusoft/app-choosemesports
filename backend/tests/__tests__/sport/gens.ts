import { SportIn, PositionIn, UniqueFieldIn, StatIn } from "../../generated/types/graphql";
import { genString } from "../utils/gens";

export function genSportIn (): SportIn {
    return {
        name: genString(),
    }
}

export function genPositionIn (sportID: string): PositionIn {
    return {
        name: genString(),
        stats: [genStatIn()],
        sportID
    }
}

export function genStatIn (): StatIn {
    return {
        name: genString(),
    }
}

export function genUniqueFieldIn (sportID: string): UniqueFieldIn {
    return {
        label: genString(),
        sportID
    }
}