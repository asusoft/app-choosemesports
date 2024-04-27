import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { Typography } from '@src/component/ui-lib/text/Typography'
import GLOBAL_CONSTANTS from '@src/constants/constants'
import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { HorizontalInput } from '../ui/horizontal-input'
import { useTheme } from '@src/services/theme/hooks'
import { usePlayerInfo } from '../../model'
import { PlayerContactInUpdate } from '@src/shared/generated/types/graphql'
import FooterButton from '@src/component/ui-lib/buttons/FooterButton'

export const FifthStep = () => {
  const { theme } = useTheme()
  const { handlers, isLoading } = usePlayerInfo()

  const [contact, setContact] = useState<PlayerContactInUpdate>()

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: theme.palette.background }}>
      <View style={{ paddingHorizontal: GLOBAL_CONSTANTS.paddingHorizontal }}>
        <Spacing value={12} />
        <Typography
          children={'Let’s know more about you'}
          variant='subHero'
          style={{
            textAlign: 'center',
          }}
        />
        <Spacing value={20} steps={2} />
        <View style={{ paddingHorizontal: GLOBAL_CONSTANTS.paddingHorizontal - 8 }}>
          <Typography
            children={'You can do this later on your profile settings.'}
            variant='textParagraph'
          />
          <Spacing value={20} steps={2} />
          <HorizontalInput
            label='Phone Number:'
            onChange={value => {
              setContact(contact => ({ ...contact, phone: value }))
            }}
          />
          <HorizontalInput
            label='Youtube Link:'
            onChange={value => {
              setContact(contact => ({ ...contact, youtube: value }))
            }}
          />
          <HorizontalInput
            label='Twitter (X):'
            onChange={value => {
              setContact(contact => ({ ...contact, twitter: value }))
            }}
          />
          <HorizontalInput
            label='Instagram:'
            onChange={value => {
              setContact(contact => ({ ...contact, instagram: value }))
            }}
          />
          <HorizontalInput
            label='Facebook:'
            onChange={value => {
              setContact(contact => ({ ...contact, facebook: value }))
            }}
          />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 45,
          right: GLOBAL_CONSTANTS.paddingHorizontal,
          left: GLOBAL_CONSTANTS.paddingHorizontal,
          gap: 12,
        }}>
        <FooterButton isLoading={isLoading} label='Skip' onPress={() => handlers.onSkip()} textColor='#000000' />
        <FooterButton isLoading={isLoading} label='Save' onPress={() => handlers.onSaveContacts()} textColor='#000000' />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
