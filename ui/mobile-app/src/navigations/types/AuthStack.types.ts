import { ParamListBase } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type AuthStackParamList = {
  HomeScreen: undefined
  AddPositionScreen: undefined
  SettingsScreen: undefined
  VideosScreen: undefined
  PostVideoScreen: undefined
}

export type ScreenNavigationProp<
  T extends ParamListBase,
  RouteName extends keyof T = keyof ParamListBase,
> = NativeStackScreenProps<T, RouteName>

export type TAuthScreenNavigationProp<RouteName extends keyof AuthStackParamList> =
  ScreenNavigationProp<AuthStackParamList, RouteName>
