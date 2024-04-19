import {
    GraphQLClient,
} from 'graphql-request'

import { uploadMiddleware } from 'graphql-request-upload'

export function createGraphqlClient (): GraphQLClient {
    return new GraphQLClient(
        "http://192.168.31.113:4000/",
        { requestMiddleware: uploadMiddleware, }
    )
}