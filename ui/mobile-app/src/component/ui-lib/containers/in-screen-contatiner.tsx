import GLOBAL_CONSTANTS from '@src/constants/constsnts'
import { useTheme } from '@src/services/theme/hooks'
import { PropsWithChildren } from 'react'
import { View } from 'react-native'

export const Container = (props: PropsWithChildren) => {
  const { theme } = useTheme()
  const backgroundColor = theme.palette.background
  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        paddingHorizontal: GLOBAL_CONSTANTS.paddingHorizontal,
        borderTopWidth: 1,
        borderColor: theme.palette.line,
      }}
      {...props}
    />
  )
}
