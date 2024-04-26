import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TNoAuthStackParamList } from '../types/NoAuthStack.types'
import OnboardingScreen from '@src/screens/onboarding'
import { LoginScreen } from '@src/screens/NoAuth/Login'
import { RegisterScreen } from '@src/screens/NoAuth/register'

const NoAuthStack = createNativeStackNavigator<TNoAuthStackParamList>()

const NoAuthStackNavigator = () => {
  return (
    <NoAuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='OnboardingScreen'>
      <NoAuthStack.Screen name='OnboardingScreen' component={OnboardingScreen} />
      <NoAuthStack.Screen name='LoginScreen' component={LoginScreen} />
      <NoAuthStack.Screen name='RegistrationScreen' component={RegisterScreen} />
    </NoAuthStack.Navigator>
  )
}

export default NoAuthStackNavigator
