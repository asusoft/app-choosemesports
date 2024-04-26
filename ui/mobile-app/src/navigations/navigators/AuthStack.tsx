import { useAppNavigation } from '../hooks'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../types/AuthStack.types'
import { Pressable } from 'react-native'
import { useTheme } from '@src/services/theme/hooks'
import { Header } from '@src/component/ui-lib/navigation/Header'
import HomeScreen from '@src/screens/Home'
import { BellIcon } from '@src/component/icons'
import { Typography } from '@src/component/ui-lib/text/Typography'

const Stack = createNativeStackNavigator<AuthStackParamList>()

const AuthStack = () => {
  const navigation = useAppNavigation()

  const { theme } = useTheme()

  const fill = theme.isDarkMode ? 'white' : 'black'

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
              rightElement={() => (
                <Pressable onPress={() => {}}>
                  <BellIcon fill={fill} />
                </Pressable>
              )}
              centralElement={() => <Typography variant='pageTitle'>Home</Typography>}
            />
          ),
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
