import { FontVariant, Palette, TextColors } from '@src/services/theme/types'
import { TextProps } from 'react-native'

export interface TextBaseProps extends TextProps {
  color?: keyof Palette
  variant?: FontVariant
}
