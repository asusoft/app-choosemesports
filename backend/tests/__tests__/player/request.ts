import { createEnsureRequest, createError, createGraphQLRequest, genString, throwIfNotTypename } from "../utils";
import {
    AuthUser,
    RetrieveUserDocument,
    CreatePlayerDocument,
    GetPlayerMeDocument
} from "../../generated/types/graphql"
import { GraphQLClient } from "graphql-request";
import { genEmail, genLogin, genName, genPassword } from "./gens";

export const createPlayer = createGraphQLRequest(CreatePlayerDocument)
export const retrieveUser = createGraphQLRequest(RetrieveUserDocument)
export const getPlayerMe = createGraphQLRequest(GetPlayerMeDocument)

interface UserCreds {
    login: string
    password: string
    name: string
    email: string
}

// export async function createPlayerAndEnsureOkay(
//     client: GraphQLClient,
//     userCreds: UserCreds | null = null,
// ): Promise<AuthUser> {
//     if (userCreds === null) {
      
//         const input = {
//             name: genName(),
//             login: genLogin(),
//             email: genEmail(),
//             sportID: genString(),
//             dob: new Date().toString(),
//             location: genString(),
//             password: genPassword()
//         }

//         const response = await createPlayer(
//             client,
//             { input },
//             undefined
//         )

//         if (response.createPlayer.__typename === 'ErrorWithFields') {
//             throw createError(response)
//         }

//         const user = { ...response.createPlayer.user, password: password }

//         return response.createPlayer
//     }
//     const response = await createUser(
//         client,
//         {
//             input: {
//                 password: userCreds.password,
//                 login: userCreds.login,
//                 name: userCreds.password,
//                 isAdmin: isAdmin,
//                 isScholar: isScholar,
//                 email: userCreds.email
//             }
//         },
//         undefined
//     )

//     if (response.createUser.__typename === 'ErrorWithFields') {
//         throw createError(response)
//     }

//     const user = { ...response.createUser.user, password: userCreds.password }

//     return { ...response.createUser, user }

// }

// export async function signInAndEnsureOk(
//     client: GraphQLClient,
//     login: string,
//     password: string
// ): Promise<AuthUser> {
//     const response = await signIn(
//         client, { input: { password, login } }, undefined
//     )
//     if (response.signIn.__typename !== 'AuthUser') {
//         throw createError(response.signIn)
//     }
//     return response.signIn
// }

// export async function createTokensAndEnsureOk(
//     client: GraphQLClient,
//     login: string,
//     password: string
// ): Promise<string> {
//     const response = await signInAndEnsureOk(client, login, password)
//     return response.token
// }

export const createPlayerEnsureOK = createEnsureRequest(
    createPlayer, 'createPlayer', throwIfNotTypename('AuthUser')
)

export const getMeAndEnsureOK = createEnsureRequest(
    getPlayerMe, 'getPlayerMe', throwIfNotTypename('Player')
)

export const retrieveUserAndEnsureOK = createEnsureRequest(
    retrieveUser, 'retrieveUser', throwIfNotTypename('User')
)

