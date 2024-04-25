import React, { useState, useCallback } from 'react'
import TextInputBase from '../TextInputBase/TextInputBase'
import { Pressable, Image } from 'react-native'
import { useTheme } from '@src/services/theme/hooks/useTheme'
import { TextInputProps } from '../TextInput/types'
import { EyeOff, EyeOn } from '@src/component/icons'

export const PasswordInput = (props: TextInputProps) => {
  const [isSecured, setIsSecured] = useState(true)
  const { theme } = useTheme()

  const renderItem = useCallback(() => {
    return (
      <Pressable
        onPress={() => setIsSecured(isSecured => !isSecured)}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {isSecured ? <EyeOff /> : <EyeOn />}
        {/* <Image
          source={isSecured ? icons.eye_close : icons.eye}
          resizeMode="contain"
          style={{
            height: 20,
            width: 20,
            tintColor: theme.palette.placeholder,
          }}
        /> */}
      </Pressable>
    )
  }, [isSecured, setIsSecured])

  return (
    <TextInputBase
      {...props}
      secureTextEntry={isSecured}
      appendComponent={renderItem()}
    />
  )
}
