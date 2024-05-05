import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { Typography } from '@src/component/ui-lib/text/Typography'
import GLOBAL_CONSTANTS from '@src/constants/constants'
import globalStyles, { WINDOW_HEIGHT, WINDOW_WIDTH } from '@src/constants/styles'
import { useViewer } from '@src/entities/viewer'
import { useTheme } from '@src/services/theme/hooks'
import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import { Section } from './ui/section-container'
import CountryFlag from 'react-native-country-flag'
import { Positions } from './ui/positions'
import { getAge } from '@src/utils/get-age'

const background = require('@/img/background.png')

export const HomeScreen = () => {
  const { viewer, actions } = useViewer()
  const { theme } = useTheme()

  const source = viewer.avatar ? { uri: viewer.avatar.path } : background

  return (
    <View style={{ ...styles.container, backgroundColor: theme.palette.background }}>
      <ImageBackground
        source={source}
        style={{
          width: WINDOW_WIDTH,
          height: WINDOW_HEIGHT / 2,
          backgroundColor: theme.palette.border,
          position: 'absolute',
          justifyContent: 'flex-end',
          paddingBottom: 60,
          paddingHorizontal: 22,
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Typography children={viewer.name.split(' ')[0]} variant='subHero' />
            <Typography
              children={`${viewer.name.split(' ')[1]} ${viewer.name.split(' ')[2]}`}
              variant='hero'
            />
          </View>
          {viewer.personal.nationality && (
            <View style={{ justifyContent: 'flex-end' }}>
              <CountryFlag isoCode={viewer.personal.nationality?.code} size={35} />
            </View>
          )}
        </View>
        <Spacing />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant='buttonText' children={viewer.sport?.name} />
          {viewer.playerPositions && (
            <Typography variant='buttonText' children={viewer.playerPositions[0].name} />
          )}
        </View>
        {viewer.additionalFields && (
          <>
            <Spacing />
            <View style={globalStyles.wrap}>
              {viewer.additionalFields.map((field, index) => (
                <View key={index} style={{ flexDirection: 'row', gap: 4 }}>
                  <Typography variant='textButton' children={`${field.label}:`} />
                  <Typography variant='textParagraph' children={field.value} />
                </View>
              ))}
            </View>
          </>
        )}
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: WINDOW_WIDTH,
            height: 145,
            backgroundColor: '#466A3F',
            marginTop: WINDOW_HEIGHT / 2 - 40,
            borderTopRightRadius: 45,
            borderTopLeftRadius: 45,
            justifyContent: 'space-between',
            paddingVertical: GLOBAL_CONSTANTS.paddingHorizontal,
            flexDirection: 'row',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '30%',
              gap: 8,
              height: 50,
            }}>
            <Typography variant='buttonText'>Age</Typography>
            <Typography variant='textButton'>
              {getAge(viewer.personal.dateOfBirth)}
            </Typography>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '40%',
              gap: 8,
              height: 50,
              borderRightWidth: 2,
              borderLeftWidth: 2,
              borderColor: '#C7C7C7',
            }}>
            <Typography variant='buttonText'>Height</Typography>
            <Typography variant='textButton'>{`${viewer.personal.height}M`}</Typography>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '30%',
              gap: 8,
              height: 50,
            }}>
            <Typography variant='buttonText'>Weight</Typography>
            <Typography variant='textButton'>{`${viewer.personal.weight}Kg`}</Typography>
          </View>
        </View>
        <View
          style={{
            width: WINDOW_WIDTH,
            flex: 1,
            backgroundColor: theme.palette.background,
            marginTop: -55,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            paddingVertical: GLOBAL_CONSTANTS.paddingHorizontal,
            paddingHorizontal: 30,
          }}>
          <View style={{ gap: 8 }}>
            <Typography variant='buttonText'>About</Typography>
            <Typography variant='textParagraph'>{viewer.personal.about}</Typography>
          </View>
          <Spacing value={20} />
          {viewer.playerPositions && <Positions />}
          <Spacing value={20} />
          <Section label='Achievements' onAdd={() => {}} />
          <Spacing value={20} />
          <Section label='Video Highlights' onAdd={() => {}} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
