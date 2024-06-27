import { WINDOW_WIDTH } from '@src/constants/styles'
import React from 'react'
import VideoPlayer from 'react-native-video-player'

const background = require('@/img/background.png')
const source = require('@/img/videoplayback.mp4')

type VideoPlayerProps = {
  uri: string
  isMuted: boolean
  isPaused: boolean
  fullScreen: boolean
  onReady: () => void
  onError: (e: any) => void
}

export const Player = (props: VideoPlayerProps) => {
  return (
    <VideoPlayer
      video={{ uri: 'https://www.youtube.com/watch?v=9I6E1yc5Iks'}}
      thumbnail={background}
      style={{
        height: '100%',
        width: WINDOW_WIDTH - 40,
      }}
      showDuration={true}
      resizeMode='contain'
    />
  )
}
