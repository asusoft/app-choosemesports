import React from 'react'
import { useIsFocused } from '@react-navigation/native'
import { useViewer } from '@src/entities/viewer'
import { useAppNavigation } from '@src/navigations/hooks'
import {
  FullVideoFragment,
  useGetMyVideosQuery,
  VideoListFragment,
} from '@src/shared/generated/types/graphql'
import { useCallback, useEffect, useState } from 'react'
import { ListRenderItem, Pressable, View } from 'react-native'
import { MOCK_VIDEOS } from '@src/constants/mock-data/videos'
import { useTheme } from '@src/services/theme/hooks'
import Rating from '@src/component/ui/rating'
import { Typography } from '@src/component/ui-lib/text/Typography'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { Player } from '@src/modules/media/video/video-player'
import { VideoCard } from '@src/entities/video/ui'

export const useVideosManaging = () => {
  const { theme } = useTheme()
  const { viewer } = useViewer()
  const isFocused = useIsFocused()
  const { navigate } = useAppNavigation()
  const [data, setData] = useState<VideoListFragment | null>(MOCK_VIDEOS)
  const { loading, refetch: getMyVideos } = useGetMyVideosQuery()

  const actions = {
    getVideos: async () => {
      const result = await getMyVideos()
      if (result.data.getMyVideos.__typename === 'VideoList') {
        setData(result.data.getMyVideos)
      }
    },

    clearData: () => {
      setData(null)
    },
  }

  useEffect(() => {
    // if (isFocused) {
    //   actions.getVideos()
    // } else {
    //   actions.clearData()
    // }
  }, [isFocused])

  const onVideoPress = useCallback(
    (id: string) => () => {
      //navigate('AlbumScreen', { id })
    },
    [navigate],
  )

  const renderItem: ListRenderItem<FullVideoFragment> = useCallback(
    ({ item, index }) => (
      <VideoCard item={item} />
    ),
    [],
  )

  return {
    loading: false,
    renderItem,
    data,
  }
}
