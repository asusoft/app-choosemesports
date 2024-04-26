import React from 'react'
import { Pressable } from 'react-native'
import { Typography } from '../text/Typography'
import { useTheme } from '@src/services/theme/hooks/useTheme'
import { ButtonTypes } from './FooterButton'

const TextButton = ({ disabled, color, label, onPress }: ButtonTypes) => {
  const { theme } = useTheme()
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={{ opacity: disabled ? 0.6 : 1 }}>
      <Typography
        variant='textButton'
        style={{ color: color ? color : theme.palette.primary }}>
        {label}
      </Typography>
    </Pressable>
  )
}

export default TextButton
