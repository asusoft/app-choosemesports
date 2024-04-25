import React from 'react'
import { Image, Pressable } from 'react-native'
import { useTheme } from '@src/services/theme/hooks/useTheme'
import { ButtonTypes } from './FooterButton'

const IconButton = ({
  disabled,
  color,
  label,
  onPress,
  isLoading,
  textColor,
  icon,
}: ButtonTypes) => {
  const { theme } = useTheme()
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={{ opacity: disabled ? 0.6 : 1 }}>
      <Image
        source={icon}
        style={{
          height: 20,
          width: 20,
          tintColor: color ? color : theme.palette.icon,
        }}
        resizeMode='contain'
      />
    </Pressable>
  )
}

export default IconButton
