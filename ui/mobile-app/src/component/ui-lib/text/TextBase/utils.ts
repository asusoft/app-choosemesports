import { FontVariant, Palette, TextColors } from '@src/services/theme/types'
import { styles } from './styles'
import { useTheme } from '@src/services/theme/hooks/useTheme'

type Options = {
  color?: keyof Palette
}

export const getStyle = (variant: FontVariant, options: Options) => {
  const { theme } = useTheme()
  const font = styles[variant]

  let color: string

  if (!options.color) {
    color = theme?.palette?.typography
  } else {
    color = theme.palette[options.color]
  }

  return {
    ...font,
    color,
  }
}
