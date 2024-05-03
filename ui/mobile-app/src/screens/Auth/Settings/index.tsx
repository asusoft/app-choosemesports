import { ArrowIcon } from '@src/component/icons'
import { Container } from '@src/component/ui-lib/containers/page-container'
import { LineSeparator } from '@src/component/ui-lib/separators/line-separator'
import { Typography } from '@src/component/ui-lib/text/Typography'
import { useTheme } from '@src/services/theme/hooks'
import React, { Component } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Item } from './ui/Item'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import TextButton from '@src/component/ui-lib/buttons/TextButton'
import { useViewer } from '@src/entities/viewer'
import FooterButton from '@src/component/ui-lib/buttons/FooterButton'
import { useAppNavigation } from '@src/navigations/hooks'
import { SettingsStackParamList } from '@src/navigations/types/SettingsStack.types'

export const SettingsScreen = () => {
  const { theme } = useTheme()
  const { actions } = useViewer()
  const { navigate } = useAppNavigation<SettingsStackParamList>()
  return (
    <Container>
      <View
        style={{
          backgroundColor: '#141821',
          borderRadius: 20,
          padding: 20,
          gap: 18,
          marginTop: 40,
        }}>
        <Item label='Account Details' onPress={() => navigate('AccountDetails')} />
        <Item label='Profile' onPress={() => navigate('Profile')} />
        {/* <Item label='Notification' onPress={() => {}} />
        <Item label='Language' onPress={() => {}} /> */}
        <Item label='Change Password' onPress={() => navigate('ChangePassword')} />
        <Spacing />
        <LineSeparator />
        <Spacing />
        <Item label='Privacy & Security' onPress={() => {}} />
        <Item label='Help & Support' onPress={() => {}} />
        <Item label='About' onPress={() => {}} />
      </View>
      <Spacing value={20} steps={2} />
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <FooterButton
          style={{ width: '30%' }}
          label='Logout'
          onPress={() => actions.logout()}
          textColor='#000000'
        />
      </View>
    </Container>
  )
}
