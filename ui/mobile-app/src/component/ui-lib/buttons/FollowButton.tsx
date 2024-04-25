import { useTheme } from '@src/services/theme/hooks'
import { Pressable } from 'react-native'
import { Typography } from '../text/Typography'

type FollowButtonProps = {
  size: 'large' | 'medium' | 'small'
  isFollowing: boolean
}

export const FollowButton = (props: FollowButtonProps) => {
  const { theme } = useTheme()

  let width
  let fontSize
  let padding

  if (props.size === 'large') {
    width = 120
    fontSize = 16
    padding = 6
  }
  if (props.size === 'medium') {
    width = 80
    fontSize = 14
    padding = 4
  }
  if (props.size === 'small') {
    width = 40
    fontSize = 12
    padding = 2
  }

  return (
    <Pressable
      style={{
        width,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.palette.primary,
        padding,
        borderRadius: width,
      }}>
      <Typography style={{ fontSize, fontWeight: '600' }}>Follow</Typography>
    </Pressable>
  )
}
