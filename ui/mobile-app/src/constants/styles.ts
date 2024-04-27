import { Dimensions, ViewStyle } from 'react-native'

type TGlobalStyles = {
  pageContainer: ViewStyle
  wrap: ViewStyle
}
export const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window')

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen')

export const hRem = (size: number): number => (size * WINDOW_HEIGHT) / 812
export const wRem = (size: number): number => (size * WINDOW_WIDTH) / 812

export const GLOBAL_PADDING = 20

const globalStyles: TGlobalStyles = {
  pageContainer: {
    flex: 1,
  },
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
}

export default globalStyles
