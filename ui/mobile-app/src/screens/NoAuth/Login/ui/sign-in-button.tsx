import FooterButton, { ButtonTypes } from '@src/component/ui-lib/buttons/FooterButton'
import React from 'react'

export type AuthButtonProps = {
  disabled?: boolean
  onPress: () => void
  isLoading?: boolean
}

export const SignInButton = ({ onPress, isLoading, disabled }: AuthButtonProps) => {
  return (
    <FooterButton
      disabled={disabled}
      label='Sign In'
      isLoading={isLoading}
      onPress={onPress}
      textColor='#000000'
    />
  )
}
