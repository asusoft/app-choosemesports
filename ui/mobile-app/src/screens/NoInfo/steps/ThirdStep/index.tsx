import { useTheme } from '@src/services/theme/hooks'
import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import { usePlayerInfo } from '../../model/use-player-info'
import { Typography } from '@src/component/ui-lib/text/Typography'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import GLOBAL_CONSTANTS from '@src/constants/constants'
import FooterButton from '@src/component/ui-lib/buttons/FooterButton'
import { CloseIcon, PlusIcon } from '@src/component/icons'
import { PositionsModal } from './ui/positions-modal'
import globalStyles from '@src/constants/styles'

export const ThirdStep = () => {
  const { theme } = useTheme()
  const { handlers, positions } = usePlayerInfo()

  const [showPositionsModal, setShowPositionsModal] = useState(false)

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
        <View style={globalStyles.wrap}>
          {positions &&
            positions.map((position, index) => (
              <View
                key={index}
                style={{
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 8,
                  borderColor: theme.palette.border,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}>
                <Typography>{position.name}</Typography>
                <Pressable
                  onPress={() => handlers.onRemovePosition(position.name)}
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: theme.palette.border,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <CloseIcon height={12} width={12} fill={theme.palette.typography} />
                </Pressable>
              </View>
            ))}
        </View>
        <Spacing value={20} />
        <Pressable
          onPress={() => setShowPositionsModal(true)}
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
          onPress={() => handlers.onSavePositions()}
          textColor='#fff'
        />
      </View>
      <PositionsModal
        visible={showPositionsModal}
        onClose={() => setShowPositionsModal(false)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
