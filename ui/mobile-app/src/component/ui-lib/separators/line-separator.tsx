import { useTheme } from '@src/services/theme/hooks/useTheme'
import React from 'react'
import { View } from 'react-native'

export const LineSeparator = ({ tickness = 0.5 }) => {
  const { theme } = useTheme()
  return <View style={{ borderWidth: tickness, borderColor: theme.palette.line }} />
}
