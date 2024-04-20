import { GraphQLClient } from "graphql-request"
import { AdminIn, ErrorStatus } from "../../generated/types/graphql"
import { useClient } from "../fixtures"
import { createError } from "../utils"
import { createAdmin } from "./request"
import { describe, it, beforeAll, expect } from "bun:test"
import { genLogin, genPassword } from "../utils/gens"


describe('Create Admin', () => {
    let client: GraphQLClient
    let input: AdminIn

    beforeAll(async () => {
        client = useClient()

        input = {
            login: genLogin(),
            password: genPassword(),
        }
    })

    it('Should return INVALID_INPUT_DATA on invalid login format', async () => {
        const response = await createAdmin(
            client,
            { input: { ...input, login: '123asusoft' } },
            undefined
        )

        if (response.createAdmin.__typename === 'AuthAdmin') {
            throw createError(response)
        }
        expect(response.createAdmin.status).toBe(ErrorStatus.InvalidInputData)
        expect(response.createAdmin.fields).toEqual(['login'])
    })

    it('Should return INVALID_INPUT_DATA on weak password', async () => {
        const response = await createAdmin(
            client,
            { input: { ...input, password: '123456' } },
            undefined
        )

        if (response.createAdmin.__typename === 'AuthAdmin') {
            throw createError(response)
        }
        expect(response.createAdmin.status).toBe(ErrorStatus.InvalidInputData)
        expect(response.createAdmin.fields).toEqual(['password'])
    })

    it('Should return ALREADY_EXIST on duplicate login', async () => {
        const login = genLogin()

        const response = await createAdmin(
            client,
            { input: { ...input,  login} },
            undefined
        )

        if (response.createAdmin.__typename !== 'AuthAdmin') {
            throw createError(response)
        }

        const response1 = await createAdmin(
            client,
            { input: { ...input,  login } },
            undefined
        )

        if (response1.createAdmin.__typename === 'AuthAdmin') {
            throw createError(response1)
        }
        expect(response1.createAdmin.status).toBe(ErrorStatus.AlreadyExist)
        expect(response1.createAdmin.fields).toEqual(['login'])
    })


    it('Should successfully create admin', async () => {
        const response = await createAdmin(
            client,
            { input },
            undefined
        )
            
        if (response.createAdmin.__typename === 'ErrorWithFields') {
            throw createError(response)
        }
        expect(response.createAdmin.token).not.toBeUndefined()
        expect(response.createAdmin.admin.login).toBe(input.login)
    })
})