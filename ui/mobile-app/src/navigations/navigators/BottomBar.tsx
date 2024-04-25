import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomBarParamList } from '../types/BottomBar.types'
import AuthStack from './AuthStack'
import { useTheme } from '@src/services/theme/hooks'
import { BottomBarUI } from '@src/component/ui-lib/navigation/BottomBar'
import TestScreen from '@src/screens/test'

const TabBar = createBottomTabNavigator<BottomBarParamList>()

const BottomBar = () => {
  const { theme } = useTheme()

  return (
    <TabBar.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <BottomBarUI {...props} />}
      initialRouteName={'Home'}>
      <TabBar.Screen
        name={'Home'}
        component={AuthStack}
        options={{
          unmountOnBlur: true,
        }}
        initialParams={{ screen: 'HomeScreen' }}
      />
      <TabBar.Screen
        name={'Feed'}
        component={TestScreen}
        options={{
          unmountOnBlur: true,
        }}
      />
      <TabBar.Screen
        name={'Search'}
        component={TestScreen}
        options={({ route }) => ({
          unmountOnBlur: true,
        })}
      />
      <TabBar.Screen
        name={'Library'}
        component={TestScreen}
        options={{
          unmountOnBlur: true,
        }}
      />
      <TabBar.Screen
        name={'Profile'}
        component={AuthStack}
        options={{
          unmountOnBlur: true,
        }}
        initialParams={{ screen: 'HomeScreen' }}
      />
    </TabBar.Navigator>
  )
}

export default BottomBar
