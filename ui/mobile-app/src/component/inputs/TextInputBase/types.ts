import {
  TextInputProps as RNIProps,
  StyleProp,
  TextStyle,
  ViewStyle,
  TextInput,
  TextInputProps,
} from 'react-native'

export interface HtmlEditorMethods {
  dismissKeyboard: () => void
}

export type RNInput = TextInput

export type TextInputBaseProps = TextInputProps & {
  containerStyle: ViewStyle
  label: string
  inputStyle?: ViewStyle
  inputContainerStyle?: ViewStyle
  prependComponent?: any
  appendComponent?: any
  errorMsg?: string
  onChange: (text: string) => void
  placeholder?: string
}
