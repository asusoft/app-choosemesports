import { GraphQLClient } from "graphql-request"
import { ErrorStatus, PlayerIn } from "../../generated/types/graphql"
import { useClient } from "../fixtures"
import { createError, genString } from "../utils"
import { createPlayer, createPlayerEnsureOK } from "./request"
import { describe, it, beforeAll, expect } from "bun:test"
import { genEmail, genLogin, genName, genPassword } from "./gens"


describe('Create Player', () => {
    let client: GraphQLClient
    let input: PlayerIn

    beforeAll(async () => {
        client = useClient()

        input = {
            name: genName(),
            login: genLogin(),
            email: genEmail(),
            sportID: genString(),
            dob: new Date().toString(),
            location: genString(),
            password: genPassword()
        }

    })

    it('Should return INVALID_INPUT_DATA on invalid login format', async () => {
        const response = await createPlayer(
            client,
            { input: { ...input, login: '123asusoft' } },
            undefined
        )

        if (response.createPlayer.__typename === 'AuthUser') {
            throw createError(response)
        }
        expect(response.createPlayer.status).toBe(ErrorStatus.InvalidInputData)
        expect(response.createPlayer.fields).toEqual(['login'])
    })

    it('Should return INVALID_INPUT_DATA on weak password', async () => {
        const response = await createPlayer(
            client,
            { input: { ...input, password: '123456' } },
            undefined
        )

        if (response.createPlayer.__typename === 'AuthUser') {
            throw createError(response)
        }
        expect(response.createPlayer.status).toBe(ErrorStatus.InvalidInputData)
        expect(response.createPlayer.fields).toEqual(['password'])
    })

    it('Should return ALREADY_EXIST on duplicate login', async () => {
        const res = createPlayerEnsureOK(
            client,
            { input: { ...input,  login: 'duplicate' } },
            undefined
        )

        const response1 = await createPlayer(
            client,
            { input: { ...input,  login: 'duplicate' } },
            undefined
        )

        if (response1.createPlayer.__typename === 'AuthUser') {
            throw createError(response1)
        }
        expect(response1.createPlayer.status).toBe(ErrorStatus.AlreadyExist)
        expect(response1.createPlayer.fields).toEqual(['login'])
    })

    it('Should successfully create player', async () => {
        const response = await createPlayer(
            client,
            { input },
            undefined
        )
            
        if (response.createPlayer.__typename === 'ErrorWithFields') {
            throw createError(response)
        }
        expect(response.createPlayer.token).not.toBeUndefined()
        expect(response.createPlayer.user.login).toBe(input.login)
        expect(response.createPlayer.user.avatar).toBeNull()
    })
})