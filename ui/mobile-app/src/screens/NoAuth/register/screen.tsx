import React, { useState } from 'react'
import { Alert, Pressable, Text, View } from 'react-native'
import { SignUpButton } from './ui'
import { ToSignIn } from './ui'
import AuthLayout from '@src/component/ui-lib/layouts/AuthLayout'
import { TextInput } from '@src/component/ui-lib/inputs/TextInput'
import { PasswordInput } from '@src/component/ui-lib/inputs/PasswordInput'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import {
  useCreatePlayerMutation,
  PlayerIn,
  ERole,
  Gender,
} from '@src/shared/generated/types/graphql'
import { useAppNavigation } from '@src/navigations/hooks'
import { TNoAuthStackParamList } from '@src/navigations/types/NoAuthStack.types'
import { formatRegErrors } from '@src/utils/formated-error-messages'
import { useViewer } from '@src/entities/viewer'
import { CheckedBoxIcon, UncheckedBoxIcon } from '@src/component/icons'
import { TextBase } from '@src/component/ui-lib/text/TextBase'
import { useTheme } from '@src/services/theme/hooks'

export const Screen = () => {
  const { theme } = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const { navigate } = useAppNavigation<TNoAuthStackParamList>()
  const {
    actions: { login },
  } = useViewer()

  const [isAccespted, setIsAccespted] = useState(false)

  const [credentials, setCredentials] = useState({
    name: '',
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [registerError, setRegisterError] = useState({
    name: '',
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
    network: '',
  })

  React.useEffect(() => {
    if (registerError.network) {
      Alert.alert(registerError.network)
    }
  }, [registerError.network])

  const isEnableSignUp = () => {
    return (
      credentials.name !== '' &&
      credentials.login !== '' &&
      credentials.password !== '' &&
      credentials.confirmPassword !== '' &&
      registerError.login === '' &&
      registerError.password === '' &&
      registerError.confirmPassword === '' &&
      isAccespted
    )
  }

  const [createPlayer, { data: createPlayerData, loading: isCreating }] =
    useCreatePlayerMutation()

  const actions = {
    registerUser: async (data: PlayerIn) => {
      const response = await createPlayer({
        variables: { input: data },
      })

      if (response.data?.createPlayer.__typename === 'ErrorWithFields') {
        const field = response.data.createPlayer.fields[0]
        const status = response.data.createPlayer.status
        setRegisterError(errors => ({
          ...errors,
          [field]: formatRegErrors(field, status),
        }))
        console.log('field: ', response.data.createPlayer.fields)
        console.log('status: ', response.data.createPlayer.status)
      }

      const loginData = {
        login: data.login,
        password: data.password,
        role: ERole.Player,
      }
      if (response.data?.createPlayer.__typename === 'AuthUser') {
        const response = await login(loginData)

        if (response) Alert.alert(response)
      }
    },
  }

  const handlers = {
    onSubmit: async (data: PlayerIn) => {
      setIsLoading(true)
      if (credentials.password === credentials.confirmPassword) {
        await actions.registerUser(data)
        setIsLoading(false)
      } else {
        setRegisterError(prevState => ({
          ...prevState,
          confirmPassword: "Password does'nt match",
        }))
        setIsLoading(false)
      }
    },
  }

  const underlinedText = (text: string) => (
    <Text style={{ textDecorationLine: 'underline', color: theme.palette.primary }}>
      {text}
    </Text>
  )

  return (
    <AuthLayout
      title={'Getting Started'}
      subtitle={'Create an account to continue!'}
      renderBottomElement={() => (
        <>
          <Spacing value={20} steps={2} />
          <View style={{ flexDirection: 'row' }}>
            <Pressable onPress={() => setIsAccespted(p => !p)}>
              {isAccespted ? (
                <CheckedBoxIcon fill={theme.palette.primary} />
              ) : (
                <UncheckedBoxIcon stroke={theme.palette.primary} />
              )}
            </Pressable>
            <TextBase
              variant={'textParagraph'}
              color={'placeholder'}
              style={{ flex: 1, marginLeft: 8, marginVertical: -4 }}>
              {'I accept the '}
              <TextBase color={'placeholder'} onPress={() => {}}>
                {underlinedText('user agreement')}
              </TextBase>
              {', '}
              <TextBase color={'placeholder'} onPress={() => {}}>
                {underlinedText('privacy policy')}
              </TextBase>
              {', and consent to the '}
              {underlinedText('processing of my personal data')}
            </TextBase>
          </View>
          <Spacing value={20} steps={2} />
          <SignUpButton
            disabled={!isEnableSignUp()}
            isLoading={isLoading}
            onPress={() =>
              handlers.onSubmit({
                name: credentials.name,
                login: credentials.login,
                password: credentials.password,
                email: credentials.email
              })
            }
          />
          <Spacing steps={2} />
          <ToSignIn />
        </>
      )}
      Form={
        <>
          <TextInput
            label='Your Name'
            value={credentials.name}
            onChange={value => {
              setCredentials(creds => ({ ...creds, name: value.toString() }))
            }}
            containerStyle={{
              width: '100%',
            }}
            placeholder='Your Name'
          />
          <TextInput
            label='Choose Username'
            value={credentials.login}
            onChange={value => {
              setRegisterError(errors => ({ ...errors, login: '' }))
              setCredentials(creds => ({ ...creds, login: value.toString() }))
            }}
            containerStyle={{
              width: '100%',
            }}
            placeholder='Choose Username'
            errorMsg={registerError.login}
          />
          <TextInput
            label='Email'
            value={credentials.email}
            onChange={value => {
              setRegisterError(errors => ({ ...errors, email: '' }))
              setCredentials(creds => ({ ...creds, email: value.toString() }))
            }}
            containerStyle={{
              width: '100%',
            }}
            placeholder='email@example.com'
            errorMsg={registerError.email}
          />
          <PasswordInput
            label='Choose Password'
            value={credentials.password}
            onChange={value => {
              setRegisterError(errors => ({ ...errors, password: '' }))
              setCredentials(creds => ({ ...creds, password: value.toString() }))
            }}
            containerStyle={{
              width: '100%',
            }}
            placeholder='Password'
            errorMsg={registerError.password}
          />
          <PasswordInput
            label='Re-Enter Password'
            value={credentials.confirmPassword}
            onChange={value => {
              setRegisterError(errors => ({ ...errors, confirmPassword: '' }))
              setCredentials(creds => ({ ...creds, confirmPassword: value.toString() }))
            }}
            containerStyle={{
              width: '100%',
            }}
            placeholder='Confirm Password'
            errorMsg={registerError.confirmPassword}
          />
        </>
      }
    />
  )
}
