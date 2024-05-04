import { GraphQLClient, } from "graphql-request"
import { FullVideoFragment } from "../../generated/types/graphql";
import { postVideoAndEnsureOK } from "./request";

export async function useVideo(client: GraphQLClient, accessToken: string): Promise<FullVideoFragment> {
    return await postVideoAndEnsureOK(client, accessToken)
}

export async function useVideos (
    client: GraphQLClient,
    accessToken: string,
    count: number
): Promise<FullVideoFragment[]> {
    let videos: FullVideoFragment[] = []
    
    videos = []
    for (let i = 0; i < count; i++) {
        const reel = await useVideo(client, accessToken)
        videos.push(reel)
    }
    return videos
}