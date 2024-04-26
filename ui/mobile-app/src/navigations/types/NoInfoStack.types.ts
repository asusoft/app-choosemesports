import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type TNoInfoStackParamList = {
  Screen1: undefined
}

export type TNoAuthScreenNavigationProp<
  T extends keyof TNoInfoStackParamList = keyof TNoInfoStackParamList,
> = NativeStackScreenProps<TNoInfoStackParamList, T>
