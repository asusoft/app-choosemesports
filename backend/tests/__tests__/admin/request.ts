import { createEnsureRequest, createError, createGraphQLRequest, throwIfNotTypename } from "../utils";
import {
    Admin,
    AuthAdmin,
    CreateAdminDocument,
    GetAdminMeDocument,
    AdminLoginDocument,
    AdminLogoutDocument,
    AdminIn,
} from "../../generated/types/graphql"
import { GraphQLClient } from "graphql-request";
import { beforeAll } from "bun:test";
import { genAdminIn } from "./gens";

export const createAdmin = createGraphQLRequest(CreateAdminDocument)
export const performAdminLogin = createGraphQLRequest(AdminLoginDocument)
export const perfomeAdminLogout = createGraphQLRequest(AdminLogoutDocument)
export const getAdminMe = createGraphQLRequest(GetAdminMeDocument)

export const createAdminAndEnsureOK = createEnsureRequest(
    createAdmin, 'createAdmin', throwIfNotTypename('AuthAdmin')
)

export const loginAdminAndEnsureOK = createEnsureRequest(
    performAdminLogin, 'adminLogin', throwIfNotTypename('AuthAdmin')
)

export const getAdminMeAndEnsureOK = createEnsureRequest(
    getAdminMe, 'getAdminMe', throwIfNotTypename('Admin')
)

export async function createAdminTokensAndEnsureOk(
    client: GraphQLClient,
    login: string,
    password: string,
): Promise<string> {
    const response = await loginAdminAndEnsureOK(client, { input: { login, password } }, undefined)
    return response.token
}

export async function getAdminToken (
    client: GraphQLClient, admin: AdminIn | null = null
): Promise<string> {
    if (admin === null) {
        admin = genAdminIn()
        const adminRes = await createAdmin(
            client, { input: admin }, undefined
        )
        if (adminRes.createAdmin.__typename === 'ErrorWithFields') {
            throw createError(adminRes.createAdmin)
        }
    } else {
        const adminRes = await createAdmin(
            client, { input: admin }, undefined
        )
        if (adminRes.createAdmin.__typename === 'ErrorWithFields') {
            throw createError(adminRes.createAdmin)
        }
    }
    const response = await performAdminLogin(
        client,
        { input: { login: admin.login, password: admin.password }},
        undefined
    )
    if (response.adminLogin.__typename !== 'AuthAdmin') {
        throw createError(response.adminLogin)
    }
    return response.adminLogin.token
}

export function useAdminToken (
    client: GraphQLClient,
    admin: AdminIn | null = null
): () => string {
    let token: string

    beforeAll(async () => {
        token = await getAdminToken(client, admin)
    })

    return () => token
}
