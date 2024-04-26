import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import NoAuthStack from './NoAuthStack'
import { TMainStackParamList } from '../types/MainStack.types'
import BottomBar from './BottomBar'
import { useViewer } from '@src/entities/viewer'
import SplashScreen from '@src/screens/splash'

const Stack = createNativeStackNavigator<TMainStackParamList>()

const MainStack = () => {
  const { isCheckingToken, isAuth } = useViewer()

  if (isCheckingToken) {
    return <SplashScreen />
  }

  if (isAuth) {
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
