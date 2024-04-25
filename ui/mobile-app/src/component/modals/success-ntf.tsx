import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@src/constants/styles'
import React from 'react'
import { Animated, View } from 'react-native'
import { Notifier } from 'react-native-notifier'
import { SuccessIcon } from '../icons'
import { Typography } from '../ui-lib/text/Typography'
import { useTheme } from '@src/services/theme/hooks'

const getContainerStyleWithTranslateAndScale = (translateY: Animated.Value) => ({
  transform: [
    {
      scale: translateY.interpolate({
        inputRange: [-1000, -200, 0],
        outputRange: [0, 0.5, 1],
        extrapolate: 'clamp',
      }),
    },
  ],
})

const CustomComponent = ({
  title,
  description,
}: {
  title: string
  description?: string
}) => {
  const { theme } = useTheme()
  return (
    <View
      style={{
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: '#00000033',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          padding: 16,
          width: '80%',
          backgroundColor: theme.palette.background,
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <SuccessIcon />
        <Typography variant='pageTitle' style={{ color: '#079D1F' }} children={title} />
        {description && <Typography variant='textParagraph' children={description} />}
      </View>
    </View>
  )
}

export const successNotification = (title: string, description?: string) => {
  return Notifier.showNotification({
    title,
    description,
    duration: 1500,
    hideOnPress: true,
    showAnimationDuration: 50,
    hideAnimationDuration: 100,
    containerStyle: getContainerStyleWithTranslateAndScale,

    Component: CustomComponent,
  })
}
