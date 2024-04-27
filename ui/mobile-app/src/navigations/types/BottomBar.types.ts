import { AuthStackParamList } from './AuthStack.types'

export type BottomBarTab = 'Feed' | 'Notifications' | 'Profile'

export type BottomBarParamList = Record<
  BottomBarTab,
  { screen: keyof AuthStackParamList }
>
