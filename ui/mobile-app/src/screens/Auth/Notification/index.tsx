import { Container } from '@src/component/ui-lib/containers/page-container'
import { Typography } from '@src/component/ui-lib/text/Typography'
import React from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import { useNotifications } from './ui/model'
import GLOBAL_CONSTANTS from '@src/constants/constants'
import { useTheme } from '@src/services/theme/hooks'

export const NotificationsScreen = () => {
  const { theme } = useTheme()
  const { data, loading, renderItem } = useNotifications()

  let view: JSX.Element | null = null

  if (loading)
    view = (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator size={'large'} />
      </View>
    )

  if (!loading && data)
    view = (
      <>
        <FlatList
          data={data.notifications}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          contentContainerStyle={{ marginVertical: 30, paddingBottom: 100, gap: 12 }}
          ListEmptyComponent={() => (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <Typography>No Notifications...</Typography>
            </View>
          )}
          ItemSeparatorComponent={() => (
            <View style={{ height: 0.5, backgroundColor: theme.palette.line }} />
          )}
        />
      </>
    )

  return <Container children={view} />
}
