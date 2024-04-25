import React, { forwardRef } from 'react'
import { useTheme } from '@src/services/theme/hooks/useTheme'
import { getStyle } from './utils'
import { Text } from 'react-native'
import { TextBaseProps } from './types'

export const TextBase = forwardRef<Text, TextBaseProps>((props, ref) => {
  const { style: propStyle, children, variant = 'textParagraph', color } = props
  const { theme } = useTheme()

  return (
    <Text {...props} style={[getStyle(variant, { color }), propStyle]}>
      {children}
    </Text>
  )
})
