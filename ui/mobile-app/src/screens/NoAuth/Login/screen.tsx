import React, { useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
import AuthLayout from '@src/component/ui-lib/layouts/AuthLayout'
import { TextInput } from '@src/component/ui-lib/inputs/TextInput'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { PasswordInput } from '@src/component/ui-lib/inputs/PasswordInput'
import { useViewer } from '@src/entities/viewer'
import { ERole, LogInInput } from '@src/shared/generated/types/graphql'
import { ForgotPassword, SignInButton, ToSignUp } from './ui'

export const Screen = () => {
  const {
    actions: { login },
  } = useViewer()
  const [isLoading, setIsLoading] = useState(false)
  const [credentials, setCredentials] = useState<LogInInput>({
    login: '',
    password: '',
    role: ERole.Player,
  })
  const [loginError, setLoginErrors] = useState({
    login: '',
    password: '',
    both: '',
    network: '',
  })

  React.useEffect(() => {
    if (loginError.network) {
      Alert.alert(loginError.network)
    }
  }, [loginError.network])

  const isEnableSignIn = () => {
    return (
      credentials.login !== '' &&
      credentials.password !== '' &&
      loginError.login === '' &&
      loginError.both === '' &&
      loginError.password === ''
    )
  }

  const handlers = {
    onSubmit: async (data: LogInInput) => {
      setIsLoading(true)

      const response = await login(data)

      if (response)
        setLoginErrors(prevState => ({
          ...prevState,
          both: 'Incorrect username or password',
        }))

      setIsLoading(false)
    },
  }

  return (
    <AuthLayout
      title={'Let’s Sign You In'}
      subtitle={'Welcome back, you’ve been missed!'}
      Form={
        <>
          <Spacing steps={3} value={20} />
          <TextInput
            value={credentials.login}
            onChange={value => {
              setLoginErrors(errors => ({ ...errors, login: '', both: '' }))
              setCredentials(creds => ({ ...creds, login: value.toString() }))
            }}
            containerStyle={{
              width: '100%',
            }}
            placeholder='Username'
            errorMsg={loginError.login || loginError.both}
          />
          <PasswordInput
            value={credentials.password}
            onChange={value => {
              setLoginErrors(errors => ({ ...errors, password: '', both: '' }))
              setCredentials(creds => ({ ...creds, password: value.toString() }))
            }}
            containerStyle={{
              width: '100%',
            }}
            placeholder='Password'
            errorMsg={loginError.password || loginError.both}
          />
          <Spacing steps={2} />
          <ForgotPassword />
          <Spacing steps={4} />
        </>
      }
      renderBottomElement={() => (
        <>
          <SignInButton
            disabled={!isEnableSignIn()}
            isLoading={isLoading}
            onPress={() => handlers.onSubmit(credentials)}
          />
          <Spacing steps={2} />
          <ToSignUp />
        </>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
})
