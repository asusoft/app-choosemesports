import { type TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { GraphQLClient, Variables } from 'graphql-request'
import { FromEntries } from './types'
import { createError } from '.'


export function buildAuthHeaders (
    accessToken: string | undefined
): Record<string, string> {
    const headers: Record<string, string> = {}
    if (accessToken != null) {
        headers.Authorization = accessToken
    }
    return headers
}

export function createGraphQLRequest<Result, V extends Variables> (
    document: TypedDocumentNode<Result, V>,
    handleResult?: (res: Result) => void
) {
    return async (
        client: GraphQLClient,
        variables: V,
        accessToken: string | undefined
    ) => {

        const headers = {
            ...buildAuthHeaders(accessToken),
        };
        const response = await client.request<Result, Variables>(
            document,
            variables,
            headers
        )
        if (handleResult !== undefined) {
            handleResult(response)
        }
        return response
    }
}
type BaseResult<K extends string> = { __typename?: string } & Partial<FromEntries<[
    [K, { __typename?: string } | null]
]>>

type EnsureOKRequest<
    // eslint-disable-next-line no-use-before-define
    Result extends BaseResult<K>,
    V extends Variables,
    K extends Exclude<Extract<keyof Result, string>, '__typename'>,
    EnsureResult
> = (
    c: GraphQLClient, v: V, t: string | undefined
) => Promise<EnsureResult>

export function createEnsureRequest<
    // eslint-disable-next-line no-use-before-define
    Result extends BaseResult<K>,
    V extends Variables,
    K extends Exclude<Extract<keyof Result, string>, '__typename'>,
    EnsureResult
> (
    request: ReturnType<typeof createGraphQLRequest<Result, V>>,
    key: K,
    guard: (v: Result[K]) => EnsureResult
): EnsureOKRequest<Result, V, K, EnsureResult> {
    return async (client, variables, accessToken) => {
        const response = await request(client, variables, accessToken)
        const value = response[key]
        return guard(value)
    }
}

export function throwIfNotNull<T> (error: T | null | undefined): void {
    if (error != null) throw createError(error)
}

function typenameGuard<
    T extends { __typename: string },
    T2 extends { __typename: string },
    K extends T['__typename'],
> (
    obj: T | T2,
    key: K
): obj is Extract<T | T2, { __typename: K }> {
    return obj.__typename === key
}

export function throwIfNotTypename<
    T extends { __typename: string },
    T2 extends { __typename: string },
    K extends T['__typename']
> (
    typename: K
): (obj: T | T2) => Extract<T | T2, { __typename: K }> {
    return (obj) => {
        if (typenameGuard(obj, typename)) {
            return obj
        }
        throw createError(obj)
    }
}
