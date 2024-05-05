import { useIsFocused } from '@react-navigation/native'
import { useTheme } from '@src/services/theme/hooks'
import { FullVideoFragment } from '@src/shared/generated/types/graphql'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'

type VideoCardProps = {
  item: FullVideoFragment
}

export const VideoContext = createContext({} as ReturnType<typeof useVideoCard>)
export const useVideoContext = () => useContext(VideoContext)
export const { Provider: VideoContextProvider } = VideoContext

export const useVideoCard = (data: VideoCardProps) => {
  const { theme } = useTheme()
  const isFocused = useIsFocused()

  const [fullScreen, setFullScreen] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [isReady, setIsReady] = useState(false)
  const [error, setError] = useState(false)
  const [video, setVideo] = useState<FullVideoFragment>(data.item)

  const onTogglePlay = useCallback(() => {
    setFullScreen(p => !p)
  }, [data])
  const onTogglePlayback = useCallback(() => setFullScreen(p => !p), [data])

  const onError = (e: any) => {
    setError(true)
  }

  const onReady = () => {
    setIsReady(true)
    setError(false)
  }

  return {
    value: data,
    video,
    theme,
    fullScreen,
    isPaused,
    isReady,
    error,
    onError,
    onTogglePlayback,
    onReady,
    onTogglePlay,
  }
}
