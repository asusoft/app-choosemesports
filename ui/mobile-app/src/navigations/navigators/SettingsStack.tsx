import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SettingsStackParamList } from '../types/SettingsStack.types'
import { Header } from '@src/component/ui-lib/navigation/Header'
import { SettingsScreen } from '@src/screens/Auth/Settings'
import { Pressable } from 'react-native'
import { ArrowLeftIcon } from '@src/component/icons'
import { useAppNavigation } from '../hooks'
import {
  AccountDetails,
  ChangePassword,
  Profile,
} from '@src/screens/Auth/Settings/in-screens'
import { useTheme } from '@src/services/theme/hooks'

const Stack = createNativeStackNavigator<SettingsStackParamList>()

const SettingsStack = () => {
  const navigation = useAppNavigation()
  const { theme } = useTheme()
  return (
    <Stack.Navigator
      initialRouteName='Land'
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen
        name='Land'
        component={SettingsScreen}
        options={{
          title: 'Settings',
          animation: 'slide_from_right',
          header: props => (
            <Header
              {...props}
              leftElement={() => (
                <Pressable onPress={() => navigation.goBack()}>
                  <ArrowLeftIcon fill={theme.palette.typography} />
                </Pressable>
              )}
            />
          ),
        }}
      />
      <Stack.Screen
        name='AccountDetails'
        component={AccountDetails}
        options={{ title: 'Account Details', animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{ title: 'Profile', animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name='ChangePassword'
        component={ChangePassword}
        options={{ title: 'Change Password', animation: 'slide_from_right' }}
      />
    </Stack.Navigator>
  )
}

export default SettingsStack
