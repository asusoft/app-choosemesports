import { WINDOW_WIDTH } from '@src/constants/styles'
import React from 'react'
import VideoPlayer from 'react-native-video-player'

const background = require('@/img/background.png')

type VideoPlayerProps = {
  uri: string
  isMuted: boolean
  isPaused: boolean
  fullScreen: boolean
  onReady: () => void
  onError: (e: any) => void
  preview: string
}

export const Player = (props: VideoPlayerProps) => {
  const thumbnail = props.preview !== '' ? { uri: props.preview } : background

  return (
    <VideoPlayer
      video={{ uri: props.uri }}
      thumbnail={thumbnail}
      style={{
        height: '100%',
        width: WINDOW_WIDTH - 40,
      }}
      showDuration={true}
      resizeMode='cover'
    />
  )
}
