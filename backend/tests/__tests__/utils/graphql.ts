import {
    GraphQLClient,
} from 'graphql-request'

import { uploadMiddleware } from 'graphql-request-upload'

export function createGraphqlClient (): GraphQLClient {
    return new GraphQLClient(
        "http://172.20.10.3:4000/",
        { requestMiddleware: uploadMiddleware, }
    )
}