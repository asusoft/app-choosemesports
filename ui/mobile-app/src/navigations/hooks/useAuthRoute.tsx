import { RouteProp, useRoute } from '@react-navigation/native'
import { AuthStackParamList } from '../types/AuthStack.types'

const useAuthRoute = <T extends keyof AuthStackParamList>() => {
  const route = useRoute<RouteProp<AuthStackParamList, T>>()
  return route
}

export default useAuthRoute
