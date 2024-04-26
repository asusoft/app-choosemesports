import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import NoAuthStack from './NoAuthStack'
import { TMainStackParamList } from '../types/MainStack.types'
import BottomBar from './BottomBar'
import { useViewer } from '@src/entities/viewer'
import SplashScreen from '@src/screens/splash'
import NoInfoStack from './NoInfoStack'

const Stack = createNativeStackNavigator<TMainStackParamList>()

const MainStack = () => {
  const { isCheckingToken, isAuth, hasInfo } = useViewer()

  if (isCheckingToken ) {
    return <SplashScreen />
  }

  if (isAuth && hasInfo) {
    return (
      <Stack.Navigator
        initialRouteName='BottomBar'
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='BottomBar' component={BottomBar} />
      </Stack.Navigator>
    )
  }
  if(!hasInfo){
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='NoInfo' component={NoInfoStack} />
      </Stack.Navigator>
    )
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'NoAuthStack'} component={NoAuthStack} />
    </Stack.Navigator>
  )
}

export default MainStack
