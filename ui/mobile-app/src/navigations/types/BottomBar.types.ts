import { AuthStackParamList } from './AuthStack.types'

export type BottomBarTab = 'Home' | 'Feed' | 'Search' | 'Library' | 'Profile'

export type BottomBarParamList = Record<
  BottomBarTab,
  { screen: keyof AuthStackParamList }
>
