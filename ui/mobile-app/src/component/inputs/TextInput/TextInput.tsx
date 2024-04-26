import React, { forwardRef } from 'react'
import TextInputBase from '../TextInputBase/TextInputBase'
import { RNInput } from '../TextInputBase/types'
import { TextInputProps } from './types'

export const TextInput = forwardRef<RNInput, TextInputProps>((props, ref) => {
  return <TextInputBase {...props} ref={ref} />
})
