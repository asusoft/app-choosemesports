import {
    GraphQLClient,
} from 'graphql-request'

import { uploadMiddleware } from 'graphql-request-upload'

export function createGraphqlClient (): GraphQLClient {
    return new GraphQLClient(
        "http://localhost:4000",
        { requestMiddleware: uploadMiddleware, }
    )
}