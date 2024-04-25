import FooterButton from '@src/component/ui-lib/buttons/FooterButton'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { Typography } from '@src/component/ui-lib/text/Typography'
import GLOBAL_CONSTANTS from '@src/constants/constants'
import { Logo, OnboardingImage } from '@src/img'
import { useAppNavigation } from '@src/navigations/hooks'
import { TNoAuthStackParamList } from '@src/navigations/types/NoAuthStack.types'
import { useTheme } from '@src/services/theme/hooks'
import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'


const OnboardingScreen = () => {
  const { navigate } = useAppNavigation<TNoAuthStackParamList>()
  const { theme } = useTheme()
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.palette.background, alignItems: 'center' }}>
        <View style={{ marginTop: 70, alignItems: 'center', paddingHorizontal: GLOBAL_CONSTANTS.paddingHorizontal + 11 }}>
          <Logo />
          <Spacing value={12} steps={4}/>
          <Typography style={{ textAlign: 'center', fontSize: 17}}>Create an account to showcase your sports talents, connect with scouts, and unlock new opportunities.</Typography>
        </View>
        <Spacing value={12} steps={5}/>
        <OnboardingImage />
        <View style={{ gap: 12, width: '100%', marginTop: 'auto', marginBottom: 50, flexDirection: 'row', justifyContent: 'center' }}>
          <FooterButton
            disabled={false}
            label='Log In'
            isLoading={false}
            onPress={() => {}}
            style={{ width: '40%'}}
            textColor={'#000000'}
          />
          <FooterButton
            disabled={false}
            label='Register'
            isLoading={false}
            onPress={() => {}}
            color='transparent'
            style={{ width: '40%', borderWidth: 1, borderColor: theme.palette.primary }}
          />
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
})

export default OnboardingScreen
