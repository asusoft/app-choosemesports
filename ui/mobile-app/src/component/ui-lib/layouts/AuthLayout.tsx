import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useTheme } from '@src/services/theme/hooks/useTheme'
import { Typography } from '../text/Typography'
import { Spacing } from '../separators/spacing'
import TextButton from '../buttons/TextButton'
import { AuthLayoutProps } from './types'

const AuthLayout = ({ title, subtitle, children, hideFooter }: AuthLayoutProps) => {
  const { theme } = useTheme()

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: theme.palette.background }}>
      <KeyboardAwareScrollView
        scrollEnabled={true}
        style={{
          flex: 1,
          marginTop: 60,
          paddingHorizontal: 12,
          backgroundColor: theme.palette.background,
        }}
        enableAutomaticScroll={true}
        keyboardDismissMode='on-drag'
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: 12,
        }}>
        <View>
          <Typography variant='subHero'>{title}</Typography>
          <Spacing value={12} steps={1} />
          <Typography
            variant='pageTitle'
            style={{
              color: theme.palette.placeholder,
            }}>
            {subtitle}
          </Typography>
        </View>
        <Spacing value={12} steps={3} />
        {children}
      </KeyboardAwareScrollView>
      {!hideFooter && (
        <View style={{ marginTop: 'auto', alignItems: 'center' }}>
          <Typography>By signing up, you agree to our</Typography>
          <TextButton onPress={() => {}} label={'TERMS AND CONDITIONS'} />
        </View>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  logo: {
    height: 80,
    width: 110,
  },
})

export default AuthLayout
