//import liraries
import React from 'react'
import { View, Alert } from 'react-native'
import { useTheme } from '@src/services/theme/hooks/useTheme'
import TextButton from '@src/component/ui-lib/buttons/TextButton'

export const ForgotPassword = () => {
  const theme = useTheme()
  return (
    <View style={{ alignItems: 'flex-end' }}>
      {/* <TextButton label={'Forgot Password?'} onPress={() => {}} /> */}
    </View>
  )
}
