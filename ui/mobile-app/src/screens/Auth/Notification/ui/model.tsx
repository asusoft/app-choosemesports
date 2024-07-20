import React from 'react'
import {
  NotificationFragment,
  NotificationListFragment,
  useGetNotificationsQuery,
} from '@src/shared/generated/types/graphql'
import { useCallback, useEffect, useState } from 'react'
import { ListRenderItem } from 'react-native'
import { Item } from './Item'

export const useNotifications = () => {
  const [data, setData] = useState<NotificationListFragment | null>()
  const { loading, refetch: getNotifications } = useGetNotificationsQuery()

  const actions = {
    getNotifications: async () => {
      const result = await getNotifications()
      if (result.data.getNotifications.__typename === 'NotificationList') {
        setData(result.data.getNotifications)
      }
    },

    clearData: () => {
      setData(null)
    },
  }

  const renderItem: ListRenderItem<NotificationFragment> = useCallback(
    ({ item }) => <Item key={item.id} item={item} />,
    [],
  )

  useEffect(() => {
    async function fetch() {
      await actions.getNotifications()
    }
    fetch()
  }, [])

  return {
    loading: loading,
    renderItem,
    data,
  }
}
