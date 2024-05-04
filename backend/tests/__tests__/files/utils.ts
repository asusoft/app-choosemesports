import { file as loadFile, type BunFile } from 'bun'
import path from 'path'
import {  genRandomInt, genString } from '../utils'
import { File } from '../../generated/types/graphql'

/* eslint-disable deprecation/deprecation */
const jpegImage = loadFile(path.join(__dirname, 'test-image.jpeg'))
const pngImage = loadFile(path.join(__dirname, 'test-image.png'))
const webpImage = loadFile(path.join(__dirname, 'test-image.webp'))
const audioFile = loadFile(path.join(__dirname, 'test-audio.mp3'))
const video = loadFile(path.join(__dirname, 'test-video.mp4'))
/* eslint-enable deprecation/deprecation */

function getTestImage (): BunFile {
    switch (genRandomInt(0, 2)) {
    case 0:
        return jpegImage
    case 1:
        return pngImage
    case 2:
        return webpImage
    default:
        throw new Error()
    }
}

export function genImage(): { name: string, type: string, uri: string } {
    const file = getTestImage();
    const filename = genString(30);

    const placeholderUri = `/Users/ashehu/development/sautul-ulama/backend/tests/__tests__/files/test-image.${file.type.split('/')[1]}`;

    return {
        name: `${filename}.${file.type.split('/')[1]}`,
        type: file.type,
        uri: placeholderUri,
    };
}



export function genVideo (): { name: string, type: string, uri: string } {
    const filename = genString(30);

    const placeholderUri = `/Users/ashehu/development/sautul-ulama/backend/tests/__tests__/files/test-video.mp4`;

    return {
        name: `${filename}.mp4`,
        type: 'video/mp4',
        uri: placeholderUri,
    };

}

export function genFile (kind: string): File {
    const id = genString()
    const createdAt = genString()
    const updatedAt = genString()
    const name = genString()
    const path = genString()
    const checksum = genString()
    const size = genRandomInt()
    const type = getTestImage().type

    return {
        id, 
        createdAt, 
        updatedAt, 
        name, 
        path, 
        type, 
        checksum, 
        size
    }
}

