import React, { forwardRef } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { useTheme } from '@src/services/theme/hooks/useTheme'
import { Spacing } from '../../separators/spacing'
import { RNInput, TextInputBaseProps } from './types'
import { Typography } from '../../text/Typography'

const TextInputBase = forwardRef<RNInput, TextInputBaseProps>(
  (
    {
      containerStyle,
      label,
      placeholder,
      inputStyle,
      prependComponent,
      appendComponent,
      onChange,
      secureTextEntry,
      keyboardType = 'default',
      autoComplete = 'off',
      autoCapitalize = 'none',
      errorMsg = '',
      maxLength,
      editable,
      value,
      textAlign,
      inputContainerStyle,
      disabled,
      color,
    },
    ref,
  ) => {
    const { theme } = useTheme()

    return (
      <View style={{ ...containerStyle }}>
        {label && <Typography variant='pageTitle'>{label}</Typography>}
        <View
          style={{
            ...styles.containerInput,
            borderColor: errorMsg ? theme.palette.error : theme.palette.border,
            ...inputContainerStyle,
          }}>
          {prependComponent}
          <TextInput
            style={{
              flex: 1,
              ...inputStyle,
            }}
            editable={editable}
            placeholder={placeholder}
            placeholderTextColor={theme.palette.placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoComplete={autoComplete}
            autoCapitalize={autoCapitalize}
            onChangeText={text => onChange(text)}
            maxLength={maxLength}
            value={value}
            autoCorrect={false}
            textAlign={textAlign}
            //@ts-expect-error
            label={label}
            activeOutlineColor={theme.palette.blue}
            outlineColor={theme.palette.blue}
            activeUnderlineColor={theme.palette.blue}
            error={true}
            disabled={disabled}
            color={color || theme.palette.typography}
            ref={ref}
          />
          {appendComponent}
        </View>
        {errorMsg ? (
          <>
            <Spacing />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: theme.palette.error, marginEnd: 10 }}>
                {errorMsg}
              </Text>
            </View>
          </>
        ) : null}
      </View>
    )
  },
)

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',
    height: 48,
    borderBottomWidth: 1,
    marginTop: 12,
  },
})

export default TextInputBase
