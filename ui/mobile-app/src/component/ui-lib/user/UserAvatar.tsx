import { ImageMedia } from '@src/modules/media/image'
import { Dimensions } from '@src/shared/types'
import React from 'react'
import { ViewStyle } from 'react-native'
import { Typography } from '../text/Typography'
import { useTheme } from '@src/services/theme/hooks'

export type UserAvatarProps = {
  userId: string
  avartarUrl?: string | null
  dimensions?: Dimensions
  containerStyle?: ViewStyle
  fallbackName?: string
}

const UserAvatar = ({
  userId,
  containerStyle,
  dimensions = {
    width: 45,
    height: 45,
  },
  avartarUrl,
  fallbackName,
}: UserAvatarProps) => {
  const { theme } = useTheme()

  return (
    <ImageMedia
      uri={avartarUrl!}
      dimensions={dimensions}
      containerStyle={{
        ...containerStyle,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: dimensions ? dimensions.width : 100,
        borderColor: theme.palette.line,
      }}
      FallbackTextElement={() => {
        const displayName = fallbackName ? fallbackName[0].toUpperCase() : ''
        return (
          <Typography
            variant='userName'
            style={{
              fontSize:
                typeof dimensions.width === 'number' ? dimensions.width / 2 : 45 / 2,
            }}>
            {displayName}
          </Typography>
        )
      }}
    />
  )
}

export default UserAvatar
