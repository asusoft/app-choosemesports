import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useTheme } from '@src/services/theme/hooks/useTheme'
import { Typography } from '../text/Typography'
import { Spacing } from '../separators/spacing'
import { AuthLayoutProps } from './types'
import { Logo } from '@src/img'

const AuthLayout = ({ title, subtitle, Form, renderBottomElement }: AuthLayoutProps) => {
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
        <View style={{ alignItems: 'center' }}>
          <Logo />
          <Spacing value={20} steps={2} />
          <Typography
            variant='pageTitle'
            style={{
              color: theme.palette.placeholder,
            }}>
            {subtitle}
          </Typography>
        </View>
        <Spacing value={12} steps={1} />
        {Form}
        <Spacing value={12} steps={4} />
        {renderBottomElement && renderBottomElement()}
      </KeyboardAwareScrollView>
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
