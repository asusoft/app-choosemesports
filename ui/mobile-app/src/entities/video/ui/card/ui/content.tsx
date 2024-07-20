import React from 'react'
import { Pressable, View } from 'react-native'
import { useTheme } from '@src/services/theme/hooks'
import { useVideoContext } from '../model'
import { Player } from '@src/modules/media/video/video-player'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { Typography } from '@src/component/ui-lib/text/Typography'

export const Content = () => {
  const { theme } = useTheme()
  const { video, fullScreen, isPaused, onError, onReady } = useVideoContext()

  return (
    <Pressable
      onPress={() => {}}
      style={{
        marginBottom: 16,
      }}>
      <View
        style={{
          width: '100%',
          backgroundColor: theme.palette.background,
          borderRadius: 12,
        }}>
        <View
          style={{
            width: '100%',
            height: 180,
            backgroundColor: theme.palette.field,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}>
          <Player
            uri={video.attachement.path}
            preview={video.attachement.thumbnailUrl || ''}
            isMuted={false}
            isPaused={isPaused}
            fullScreen={fullScreen}
            onReady={onReady}
            onError={onError}
          />
        </View>
        <Spacing />
        <Typography style={{ fontSize: 14 }}>{video.description}</Typography>
        <Typography
          variant='textParagraph'
          style={{ fontSize: 14, color: theme.palette.placeholder }}
          children={video.isApproved ? 'Approved' : 'Video not approved'}
        />
      </View>
    </Pressable>
  )
}
