import TextButton from '@src/component/ui-lib/buttons/TextButton'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { Typography } from '@src/component/ui-lib/text/Typography'
import { useAppNavigation } from '@src/navigations/hooks'
import { TNoAuthStackParamList } from '@src/navigations/types/NoAuthStack.types'
import { useTheme } from '@src/services/theme/hooks'
import React from 'react'
import { View } from 'react-native'

export const ToSignIn = () => {
  const { theme } = useTheme()
  const { navigate } = useAppNavigation<TNoAuthStackParamList>()
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Typography>Already have an account?</Typography>
      <Spacing direction='horizontal' />
      <TextButton label={'Sign In'} onPress={() => navigate('LoginScreen')} />
    </View>
  )
}
