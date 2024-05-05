import { PhoneInput } from '@src/component/ui-lib/inputs/PhoneInput'
import { TextInput } from '@src/component/ui-lib/inputs/TextInput'
import { Typography } from '@src/component/ui-lib/text/Typography'
import { useTheme } from '@src/services/theme/hooks'
import React from 'react'
import { View } from 'react-native'

export const HorizontalInput = ({
  label,
  onChange,
  type = 'TEXT',
  value,
  disabled,
}: {
  label: string
  onChange: (value: string) => void
  type?: 'PHONE' | 'TEXT'
  value?: string
  disabled?: boolean
}) => {
  const { theme } = useTheme()

  const [text, setText] = React.useState(value)

  const handleChange = (value: string) => {
    setText(value)
    onChange(value)
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{ marginTop: 8 }}>
        <Typography children={label} variant='textButton' />
      </View>
      {type === 'TEXT' ? (
        <TextInput
          onChange={value => handleChange(value.toString())}
          value={text}
          containerStyle={{
            width: '50%',
          }}
          inputContainerStyle={{
            borderWidth: 1,
            borderColor: theme.palette.border,
            borderRadius: 8,
            paddingHorizontal: 12,
          }}
          editable={!disabled}
          color={disabled ? theme.palette.border : undefined}
        />
      ) : (
        <PhoneInput
          onChange={value => handleChange(value.toString())}
          value={text}
          containerStyle={{
            width: '50%',
          }}
          inputContainerStyle={{
            borderWidth: 1,
            borderColor: theme.palette.border,
            borderRadius: 8,
            paddingHorizontal: 12,
          }}
        />
      )}
    </View>
  )
}
