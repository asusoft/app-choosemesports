import { PropsWithChildren } from 'react'
import { TextStyle } from 'react-native'

export type FontVariant =
  | 'pageTitle'
  | 'textParagraph'
  | 'textSmall'
  | 'buttonText'
  | 'textButton'
  | 'title'
  | 'hero'
  | 'subHero'
  | 'sectionTitle'
  | 'userName'

export type TextColors =
  | 'textSecondary'
  | 'textPrimary'
  | 'textDisabled'
  | 'link'
  | 'error'
  | 'placeholder'
  | 'textLightContrast'

export type Palette = {
  primary: string
  background: string
  error: string
  skeleton: string
  placeholder: string
  border: string
  line: string
  typography: string
  activityIndicator: string
  field: string
  icon: string
  blue: string
}

export type Fonts = Record<
  FontVariant,
  Pick<TextStyle, 'fontFamily' | 'fontWeight' | 'fontSize' | 'lineHeight'>
>

export type ThemeSchema = {
  isDarkMode: boolean
  palette: Palette
}

export type Theme = ThemeSchema

export interface IThemeContext {
  theme: Theme
  toggleTheme: (theme?: Theme) => void
}

export interface ThemeProviderProps extends PropsWithChildren {
  /**
   * Will force switch to this theme. Do not use it in production.
   */
  theme?: Theme
}
