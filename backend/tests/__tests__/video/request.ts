import { createEnsureRequest, createError, createGraphQLRequest, throwIfNotTypename } from "../utils";
import {
    FullVideoFragment,
   PostVideoDocument,
} from "../../generated/types/graphql"
import { GraphQLClient } from "graphql-request";
import { genVideoIn } from "./gens";

export const postVideo = createGraphQLRequest(PostVideoDocument)


export async function postVideoAndEnsureOK(
    client: GraphQLClient,
    accessToken: string
): Promise<FullVideoFragment> {
    const video = await genVideoIn(client, accessToken)

    const response = await postVideo(client, { input: video }, accessToken)

    if (!response.postVideo || response.postVideo?.__typename === 'BaseError') {
        throw createError(response.postVideo)
    }

    return response.postVideo
}

