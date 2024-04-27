import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TNoInfoStackParamList } from '../types/NoInfoStack.types'
import { NoInfoSteps } from '@src/screens/NoInfo'

const NoInfoStack = createNativeStackNavigator<TNoInfoStackParamList>()

const NoInfoStackNavigator = () => {
  return (
    <NoInfoStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='FirstStep'>
      <NoInfoStack.Screen name='FirstStep' component={NoInfoSteps.FirstStep} />
      <NoInfoStack.Screen name='SecondStep' component={NoInfoSteps.SecondStep} />
      <NoInfoStack.Screen name='ThirdStep' component={NoInfoSteps.ThirdStep} />
      <NoInfoStack.Screen name='FourthStep' component={NoInfoSteps.ForthStep} />
      <NoInfoStack.Screen name='FifthStep' component={NoInfoSteps.FifthStep} />
    </NoInfoStack.Navigator>
  )
}

export default NoInfoStackNavigator
