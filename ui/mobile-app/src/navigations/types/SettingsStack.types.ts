import { ParamListBase } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type SettingsStackParamList = {
  Land: undefined
  AccountDetails: undefined
  Profile: undefined
  ChangePassword: undefined
}

export type ScreenNavigationProp<
  T extends ParamListBase,
  RouteName extends keyof T = keyof ParamListBase,
> = NativeStackScreenProps<T, RouteName>

export type TAuthScreenNavigationProp<RouteName extends keyof SettingsStackParamList> =
  ScreenNavigationProp<SettingsStackParamList, RouteName>
