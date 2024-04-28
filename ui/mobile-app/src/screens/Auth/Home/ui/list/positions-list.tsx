import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { Typography } from '@src/component/ui-lib/text/Typography'
import { useViewer } from '@src/entities/viewer'
import { useTheme } from '@src/services/theme/hooks'
import { PlayerPosition } from '@src/shared/generated/types/graphql'
import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

const Position = ({ position, index }: { position: PlayerPosition; index: number }) => {
  const { theme } = useTheme()
  return (
    <View
      key={index}
      style={{
        backgroundColor: theme.palette.background,
        padding: 12,
        borderRadius: 8,
      }}>
      <Typography variant='textButton'>{position.name}</Typography>
      <Spacing />
      <FlatList
        data={position.stats}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              backgroundColor: '#141821',
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 8,
              gap: 8,
            }}>
            <Typography variant='textButton'>{item.label}</Typography>
            <Typography>{item.value}</Typography>
          </View>
        )}
        contentContainerStyle={{
          gap: 12,
        }}
      />
    </View>
  )
}

export const PositionsList = () => {
  const { viewer } = useViewer()
  const positions = viewer.playerPositions

  if (positions === null || positions === undefined) return null

  return (
    <View style={{ ...styles.container, backgroundColor: '#141821' }}>
      <FlatList
        data={positions}
        renderItem={({ item, index }) => <Position position={item} index={index} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 12,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
