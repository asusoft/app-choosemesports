import React, { useState, useCallback, forwardRef } from 'react'
import { TextInput } from '../TextInput'
import { useTheme } from '@src/services/theme/hooks/useTheme'
import { RNInput, TextInputBaseProps } from '../TextInputBase/types'

export const PhoneInput = forwardRef<RNInput, TextInputBaseProps>((props, ref) => {
  const { theme } = useTheme()

  return (
    <TextInput
      {...props}
      ref={ref}
      containerStyle={{
        height: 48,
        width: '50%',
      }}
      inputContainerStyle={{
        borderColor: theme.palette.background,
        borderRadius: 0,
        borderWidth: 1,
        borderBottomColor: theme.palette.border,
        backgroundColor: theme.palette.field,
      }}
      keyboardType='phone-pad'
      textAlign='center'
      placeholder='Your Phone Number'
    />
  )
})
