import { useTheme } from '@src/services/theme/hooks/useTheme'
import React from 'react'
import { DimensionValue, View } from 'react-native'

export const LineSeparator = ({
  tickness = 0.5,
  width = '100%',
}: {
  tickness?: number
  width?: DimensionValue | undefined
}) => {
  const { theme } = useTheme()
  return (
    <View style={{ borderWidth: tickness, borderColor: theme.palette.line, width }} />
  )
}
