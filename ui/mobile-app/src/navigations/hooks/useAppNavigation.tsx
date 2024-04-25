import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthStackParamList } from '../types/AuthStack.types'

type AppNavigation = ReturnType<typeof useAppNavigation>

export type { AppNavigation }

export const useAppNavigation = <T extends ParamListBase = AuthStackParamList>() => {
  const navigation = useNavigation<StackNavigationProp<T>>()
  return navigation
}

export default useAppNavigation
