import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type TNoInfoStackParamList = {
  FirstStep: undefined
  SecondStep: undefined
  ThirdStep: undefined
  FourthStep: undefined
  FifthStep: undefined
}

export type TNoAuthScreenNavigationProp<
  T extends keyof TNoInfoStackParamList = keyof TNoInfoStackParamList,
> = NativeStackScreenProps<TNoInfoStackParamList, T>
