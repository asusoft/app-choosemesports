import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type TNoAuthStackParamList = {
  OnboardingScreen: undefined
  RegistrationScreen: undefined
  LoginScreen: undefined
}

export type TNoAuthScreenNavigationProp<
  T extends keyof TNoAuthStackParamList = keyof TNoAuthStackParamList,
> = NativeStackScreenProps<TNoAuthStackParamList, T>
