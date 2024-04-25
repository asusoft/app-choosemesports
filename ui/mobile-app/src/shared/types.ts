import { ViewStyle } from 'react-native'
import { SvgProps } from 'react-native-svg'

export type Hex = string

export type Dimensions = {
  width: number
  height: number
}
export type DimensionsInt = {
  width: number
  height: number
}

export type MediaType = 'image' | 'video' | 'audio' | 'unknown'

export type SvgComponent = React.FC<SvgProps>

export type FileType = {
  name: string
  type: string
  uri: string
}
export type Prettify<T> = { [K in keyof T]: T[K] } & {}

export type MediaProps = {
  uri: string | undefined
  dimensions: Dimensions
  containerStyle?: ViewStyle
  FallbackTextElement?: () => JSX.Element
}
