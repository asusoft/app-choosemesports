import { createEnsureRequest, createError, createGraphQLRequest, throwIfNotTypename } from "../utils";
import {
    AuthUser,
    ERole,
    GetMeDocument,
    LoginDocument,
    LogoutDocument,
    PlayerIn,
    RetrieveUserDocument,
} from "../../generated/types/graphql"
import { GraphQLClient } from "graphql-request";
import { beforeAll } from "bun:test";
import { genPlayerIn } from "../player/gens";
import { createPlayer } from "../player/request";

export const performLogin = createGraphQLRequest(LoginDocument)
export const perfomeLogout = createGraphQLRequest(LogoutDocument)
export const getMe = createGraphQLRequest(GetMeDocument)
export const retrieveUser = createGraphQLRequest(RetrieveUserDocument)

export const loginAndEnsureOK = createEnsureRequest(
    performLogin, 'login', throwIfNotTypename('AuthUser')
)

export const getMeAndEnsureOK = createEnsureRequest(
    getMe, 'getMe', throwIfNotTypename('User')
)

export const retrieveUserAndEnsureOK = createEnsureRequest(
    retrieveUser, 'retrieveUser', throwIfNotTypename('User')
)

export async function createTokensAndEnsureOk(
    client: GraphQLClient,
    login: string,
    password: string,
    role: ERole
): Promise<string> {
    const response = await loginAndEnsureOK(client, { input: { login, password, role } }, undefined)
    return response.token
}

export async function getPlayerToken (
    client: GraphQLClient, player: PlayerIn | null = null
): Promise<string> {
    if (player === null) {
        player = genPlayerIn()
        const playerRes = await createPlayer(
            client, { input: player }, undefined
        )
        if (playerRes.createPlayer.__typename === 'ErrorWithFields') {
            throw createError(playerRes.createPlayer)
        }
    } else {
        const playerRes = await createPlayer(
            client, { input: player }, undefined
        )
        if (playerRes.createPlayer.__typename === 'ErrorWithFields') {
            throw createError(playerRes.createPlayer)
        }
    }
    const response = await performLogin(
        client,
       {input: { login: player.login, password: player.password, role: ERole.Player }},
        undefined
    )
    if (response.login.__typename !== 'AuthUser') {
        throw createError(response.login)
    }
    return response.login.token
}

export function useCustomerToken (
    client: GraphQLClient,
    player: PlayerIn | null = null
): () => string {
    let token: string

    beforeAll(async () => {
        token = await getPlayerToken(client, player)
    })

    return () => token
}
