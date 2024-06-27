import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { Typography } from '@src/component/ui-lib/text/Typography'
import { useTheme } from '@src/services/theme/hooks'
import React, { Component, useState } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { useSports } from '../../model/use-sports'
import GLOBAL_CONSTANTS from '@src/constants/constants'
import { SportTag } from './ui/sport'
import FooterButton from '@src/component/ui-lib/buttons/FooterButton'
import { usePlayerInfo } from '../../model'
import globalStyles from '@src/constants/styles'

export const FirstStep = () => {
  const { theme } = useTheme()
  const { sportsList } = useSports()
  const { sportID, handlers } = usePlayerInfo()

  if (!sportsList) return null

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: theme.palette.background }}>
      <ScrollView style={{ paddingHorizontal: GLOBAL_CONSTANTS.paddingHorizontal }}>
        <Spacing value={12} />
        <Typography
          children={'Pick Your Passion'}
          variant='subHero'
          style={{
            textAlign: 'center',
          }}
        />
        <Spacing value={20} steps={2} />
        <Typography
          children={
            'Select Your Passion Sport Carefully; You won’t be able to change it later.'
          }
          variant='textParagraph'
        />
        <Spacing value={20} steps={2} />
        <View style={globalStyles.wrap}>
          {sportsList.sports.map((sport, index) => (
            <View key={index} style={{ paddingTop: 6 }}>
              <SportTag
                item={sport}
                selectedSpordID={sportID}
                onPress={() => handlers.onSportChange(sport)}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 45,
          right: GLOBAL_CONSTANTS.paddingHorizontal,
          left: GLOBAL_CONSTANTS.paddingHorizontal,
        }}>
        <FooterButton
          disabled={!sportID}
          label='Next'
          onPress={() => handlers.onSportSelected()}
          textColor='#fff'
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
