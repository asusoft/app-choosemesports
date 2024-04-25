import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Logo, SavvyLogo } from '@src/img'
import { useTheme } from '@src/services/theme/hooks'

const SplashScreen = () => {
  const { theme } = useTheme()
  const backgroundColor = theme.palette.background
  return (
    <View style={{ backgroundColor, ...styles.container }}>
      <View style={{ marginTop: -50 }}>
        <Logo height={200} fill={backgroundColor} />
      </View>
      <View style={{ position: 'absolute', bottom: 30 }}>
        <SavvyLogo />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default SplashScreen
