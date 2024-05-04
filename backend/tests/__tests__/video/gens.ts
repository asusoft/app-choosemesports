import {   genString, } from '../utils'
import { VideoIn } from '../../generated/types/graphql'
import { genVideo } from '../files/utils'
import { uploadVideoAndEnsureOK } from '../files/requests'
import { GraphQLClient } from 'graphql-request'


export async function genVideoIn ( 
    client: GraphQLClient,
    accessToken: string): Promise<VideoIn> {

    const description = genString()
    const video = await uploadVideoAndEnsureOK(
        client, { file: genVideo() }, accessToken
    )
   
    return {
        videoID: video.id,
        description
    }
}