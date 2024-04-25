import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TNoAuthStackParamList } from '../types/NoAuthStack.types'
import OnboardingScreens from '@src/screens/onboarding'

const NoAuthStack = createNativeStackNavigator<TNoAuthStackParamList>()

const NoAuthStackNavigator = () => {
  return (
    <NoAuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='OnboardingScreen'>
      <NoAuthStack.Screen name='OnboardingScreen' component={OnboardingScreens} />
      {/* <NoAuthStack.Screen name='LoginScreen' component={LoginScreen} />
      <NoAuthStack.Screen name='RegistrationScreen' component={RegisterScreen} /> */}
    </NoAuthStack.Navigator>
  )
}

export default NoAuthStackNavigator
