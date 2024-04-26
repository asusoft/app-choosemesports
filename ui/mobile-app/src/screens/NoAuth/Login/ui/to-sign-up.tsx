import React from 'react'
import { View } from 'react-native'
import { useTheme } from '@src/services/theme/hooks/useTheme'
import { Typography } from '@src/component/ui-lib/text/Typography'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import TextButton from '@src/component/ui-lib/buttons/TextButton'
import { useAppNavigation } from '@src/navigations/hooks'
import { TNoAuthStackParamList } from '@src/navigations/types/NoAuthStack.types'

export const ToSignUp = () => {
  const { theme } = useTheme()
  const { navigate } = useAppNavigation<TNoAuthStackParamList>()
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Typography>Don’t have an account?</Typography>
      <Spacing direction='horizontal' />
      <TextButton label={'Sign Up'} onPress={() => navigate('RegistrationScreen')} />
    </View>
  )
}
