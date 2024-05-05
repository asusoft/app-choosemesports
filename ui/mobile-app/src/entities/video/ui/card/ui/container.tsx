import React from 'react'
import { ComponentProps, PropsWithChildren } from 'react'
import { View } from 'react-native'
import { useTheme } from '@src/services/theme/hooks'
import { VideoContextProvider } from '../model'

type Props = ComponentProps<typeof VideoContextProvider> & PropsWithChildren

export const Container = ({ value, children }: Props) => {
  const { theme } = useTheme()
  const backgroundColor = theme.palette.background

  return (
    <VideoContextProvider value={value}>
      <View style={{ backgroundColor }} children={children} />
    </VideoContextProvider>
  )
}
