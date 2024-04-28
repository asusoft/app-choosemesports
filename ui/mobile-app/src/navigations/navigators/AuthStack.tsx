import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../types/AuthStack.types'
import { Header } from '@src/component/ui-lib/navigation/Header'
import { HomeScreen } from '@src/screens/Auth/Home'
import { HeaderButtons } from '@src/component/ui/home-screen/header-buttons'
import { AddPositionScreen } from '@src/screens/Auth/Position/position-add'

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          header: props => (
            <Header
              {...props}
              variant='TRANSPARENT'
              rightElement={() => <HeaderButtons />}
            />
          ),
        }}
      />
      <Stack.Screen
        name={'AddPositionScreen'}
        component={AddPositionScreen}
        options={{ title: 'Add new Position', animation: 'slide_from_bottom' }}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
