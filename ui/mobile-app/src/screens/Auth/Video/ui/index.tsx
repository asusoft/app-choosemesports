import { Container } from '@src/component/ui-lib/containers/page-container'
import { Typography } from '@src/component/ui-lib/text/Typography'
import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useVideosManaging } from './model'
import { useAppNavigation } from '@src/navigations/hooks'
import GLOBAL_CONSTANTS from '@src/constants/constants'
import FooterButton from '@src/component/ui-lib/buttons/FooterButton'

export const Screen = () => {
  const { data, loading, renderItem } = useVideosManaging()
  const navigation = useAppNavigation()

  let view: JSX.Element | null = null

  if (loading) view = <Typography>Loading...</Typography>

  if (!loading && data)
    view = (
      <>
        <FlatList
          data={data.videos}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          contentContainerStyle={{ marginVertical: 30, paddingBottom: 100 }}
          ListEmptyComponent={() => <Typography>No ALbum...</Typography>}
        />
        <View
          style={{
            position: 'absolute',
            left: GLOBAL_CONSTANTS.paddingHorizontal,
            bottom: 20,
            width: '100%',
          }}>
          <FooterButton label='Post New Video' textColor='#000000' onPress={() => {}} />
        </View>
      </>
    )

  return <Container children={view} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
})
