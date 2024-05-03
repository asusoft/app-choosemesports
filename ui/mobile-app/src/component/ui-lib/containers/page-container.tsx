import GLOBAL_CONSTANTS from '@src/constants/constants'
import { useTheme } from '@src/services/theme/hooks'
import React, { PropsWithChildren } from 'react'
import { View, StyleSheet, ColorValue } from 'react-native'
import { HeaderAvoidingView } from '../navigation/Header/header-avoiding-view'

export type PageContainerProps = {
  background?: ColorValue | undefined
} & PropsWithChildren

export const Container = ({ background, children }: PageContainerProps) => {
  const { theme } = useTheme()
  const backgroundColor = background ? background : theme.palette.background
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: GLOBAL_CONSTANTS.paddingHorizontal,
        backgroundColor,
      }}>
      <HeaderAvoidingView />
      {children}
    </View>
  )
}
