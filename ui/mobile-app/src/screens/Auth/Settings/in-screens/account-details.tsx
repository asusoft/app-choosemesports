import { errorAlert } from '@src/component/modals/alert'
import FooterButton from '@src/component/ui-lib/buttons/FooterButton'
import { Container } from '@src/component/ui-lib/containers/page-container'
import { TextInput } from '@src/component/ui-lib/inputs/TextInput'
import { Typography } from '@src/component/ui-lib/text/Typography'
import GLOBAL_CONSTANTS from '@src/constants/constants'
import { useViewer } from '@src/entities/viewer'
import { useTheme } from '@src/services/theme/hooks'
import { useUpdateUserMutation } from '@src/shared/generated/types/graphql'
import React, { Component, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const AccountDetails = () => {
  const { viewer, actions } = useViewer()
  const { theme } = useTheme()
  const [updateUser] = useUpdateUserMutation()

  const [credentials, setCredentials] = useState({
    name: viewer.name,
    login: viewer.login,
    email: viewer.email,
  })

  const [loading, setLoading] = useState(false)

  const isEnabled = () => {
    return credentials.login !== viewer.login || credentials.email !== viewer.email
  }

  const onSave = async () => {
    setLoading(true)
    const response = await updateUser({
      variables: { data: { login: credentials.login, email: credentials.email } },
    })
    if (response.data?.updateUser?.__typename === 'ErrorWithFields') {
      errorAlert(response.data.updateUser.status)
    }

    await actions.updateMe()
    setLoading(false)
  }

  return (
    <Container>
      <TextInput
        value={credentials.name}
        onChange={value => {
          setCredentials(creds => ({ ...creds, name: value.toString() }))
        }}
        containerStyle={{
          width: '100%',
        }}
        placeholder='Your Name'
        editable={false}
        color={theme.palette.placeholder}
      />
      <TextInput
        value={credentials.login}
        onChange={value => {
          setCredentials(creds => ({ ...creds, login: value.toString() }))
        }}
        containerStyle={{
          width: '100%',
        }}
        placeholder='Login'
      />
      <TextInput
        value={credentials.email}
        onChange={value => {
          setCredentials(creds => ({ ...creds, email: value.toString() }))
        }}
        containerStyle={{
          width: '100%',
        }}
        placeholder='Email'
      />
      <View
        style={{
          position: 'absolute',
          bottom: 45,
          right: GLOBAL_CONSTANTS.paddingHorizontal,
          left: GLOBAL_CONSTANTS.paddingHorizontal,
        }}>
        <FooterButton
          label='Save'
          onPress={() => onSave()}
          textColor='#fff'
          isLoading={loading}
          disabled={!isEnabled()}
        />
      </View>
    </Container>
  )
}
