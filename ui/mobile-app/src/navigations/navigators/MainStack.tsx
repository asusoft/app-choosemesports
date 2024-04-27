import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import NoAuthStack from './NoAuthStack'
import { TMainStackParamList } from '../types/MainStack.types'
import BottomBar from './BottomBar'
import { useViewer } from '@src/entities/viewer'
import SplashScreen from '@src/screens/splash'
import NoInfoStack from './NoInfoStack'
import { StateProvider } from '@src/screens/NoInfo/model'

const Stack = createNativeStackNavigator<TMainStackParamList>()

const MainStack = () => {
  const { isCheckingToken, isAuth, hasInfo } = useViewer()

  if (isCheckingToken) {
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
  if (isAuth && !hasInfo) {
    console.log('we are here')
    return (
      <StateProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name='NoInfo' component={NoInfoStack} />
        </Stack.Navigator>
      </StateProvider>
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
