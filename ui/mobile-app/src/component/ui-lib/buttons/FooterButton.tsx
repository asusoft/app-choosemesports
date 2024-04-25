import React from 'react'
import { StyleSheet, ActivityIndicator, Pressable } from 'react-native'
import { Typography } from '../text/Typography'
import { useTheme } from '@src/services/theme/hooks/useTheme'

export type ButtonTypes = {
  disabled?: boolean
  color?: string
  label: string
  onPress: () => void
  isLoading?: boolean
  textColor?: string
  icon?: string
}

const FooterButton = ({
  disabled,
  color,
  label,
  onPress,
  isLoading,
  textColor,
}: ButtonTypes) => {
  const { theme } = useTheme()

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={{
        ...styles.Footer,
        opacity: disabled ? 0.5 : 1,
        backgroundColor: color || theme?.palette.primary,
      }}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={theme?.palette.activityIndicator} />
      ) : (
        <Typography style={{ color: textColor || '#FFFFFF' }} variant='buttonText'>
          {label}
        </Typography>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  Footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    height: 46,
    borderRadius: 10,
    width: '100%',
  },
})

export default FooterButton
