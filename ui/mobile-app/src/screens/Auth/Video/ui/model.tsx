import React from 'react'
import {
  FullVideoFragment,
  useGetMyVideosQuery,
  VideoListFragment,
} from '@src/shared/generated/types/graphql'
import { useCallback, useEffect, useState } from 'react'
import { ListRenderItem } from 'react-native'
import { VideoCard } from '@src/entities/video'

export const useVideosManaging = () => {
  const [data, setData] = useState<VideoListFragment | null>()
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

  const renderItem: ListRenderItem<FullVideoFragment> = useCallback(
    ({ item }) => <VideoCard key={item.id} item={item} />,
    [],
  )

  useEffect(() => {
    async function fetch() {
      await actions.getVideos()
    }
    fetch()
  }, [])

  return {
    loading: loading,
    renderItem,
    data,
  }
}
