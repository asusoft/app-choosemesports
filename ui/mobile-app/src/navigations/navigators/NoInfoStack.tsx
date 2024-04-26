import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TNoInfoStackParamList } from '../types/NoInfoStack.types'
import Screen1 from '@src/screens/NoInfo/screen1'

const NoInfoStack = createNativeStackNavigator<TNoInfoStackParamList>()

const NoInfoStackNavigator = () => {
  return (
    <NoInfoStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Screen1'>
      <NoInfoStack.Screen name='Screen1' component={Screen1} />
    </NoInfoStack.Navigator>
  )
}

export default NoInfoStackNavigator
