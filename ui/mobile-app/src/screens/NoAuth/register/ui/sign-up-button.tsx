import React from 'react'
import FooterButton from '@src/component/ui-lib/buttons/FooterButton'
import { AuthButtonProps } from '../../Login/ui/sign-in-button'

export const SignUpButton = ({ onPress, isLoading, disabled }: AuthButtonProps) => {
  return (
    <FooterButton
      disabled={disabled}
      label='Sign Up'
      isLoading={isLoading}
      onPress={onPress}
      textColor='#000000'
    />
  )
}
