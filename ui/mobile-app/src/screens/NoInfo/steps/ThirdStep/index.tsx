import { useTheme } from '@src/services/theme/hooks'
import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import { usePlayerInfo } from '../../model/use-player-info'
import { Typography } from '@src/component/ui-lib/text/Typography'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import GLOBAL_CONSTANTS from '@src/constants/constants'
import FooterButton from '@src/component/ui-lib/buttons/FooterButton'
import { PlayerPositionIn } from '@src/shared/generated/types/graphql'
import { PlusIcon } from '@src/component/icons'
import { PositionsModal } from './ui/positions-modal'

export const ThirdStep = () => {
  const { theme } = useTheme()
  const { sport, handlers, additionalFields } = usePlayerInfo()

  const [positions, setPosition] = useState<PlayerPositionIn[]>()
  const [showPositionsModal, setShoePositionsModal] = useState(false)

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: theme.palette.background }}>
      <View style={{ paddingHorizontal: GLOBAL_CONSTANTS.paddingHorizontal }}>
        <Spacing value={12} />
        <Typography
          children={'Pick Your Playing Position'}
          variant='subHero'
          style={{
            textAlign: 'center',
          }}
        />
        <Spacing value={20} steps={2} />
        <Typography
          children={'Choose atleast one playing position'}
          variant='textParagraph'
        />
        <Spacing value={20} />
        {positions &&
          positions.map((position, index) => (
            <>
              <Spacing value={20} />
            </>
          ))}
        <Pressable
          onPress={() => setShoePositionsModal(true)}
          style={{
            borderWidth: 1,
            borderColor: theme.palette.border,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.palette.border,
            }}>
            <PlusIcon fill={'#000000'} />
          </View>
          <Spacing />
          <Typography>Add Position</Typography>
        </Pressable>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 45,
          right: GLOBAL_CONSTANTS.paddingHorizontal,
          left: GLOBAL_CONSTANTS.paddingHorizontal,
        }}>
        <FooterButton
          disabled={!positions}
          label='Next'
          onPress={() => handlers.onSportSelected()}
          textColor='#000000'
        />
      </View>
      <PositionsModal
        visible={showPositionsModal}
        onClose={() => setShoePositionsModal(false)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
