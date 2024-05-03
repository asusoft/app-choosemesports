import { CameraIcon } from '@src/component/icons'
import { Container } from '@src/component/ui-lib/containers/page-container'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { useViewer } from '@src/entities/viewer'
import { pickFromDevice } from '@src/lib/pick-from-device'
import { HorizontalInput } from '@src/component/ui-lib/inputs/horizontall-input'
import { useTheme } from '@src/services/theme/hooks'
import {
  PlayerContactInUpdate,
  useUpdateUserMutation,
  useUploadImageMutation,
} from '@src/shared/generated/types/graphql'
import React, { useState } from 'react'
import { View, Pressable, Image, ActivityIndicator, ScrollView } from 'react-native'
import { ContactInfo } from './ui/profile-contacts'
import { PersonalInfo } from './ui/profile-personal'

export const Profile = () => {
  const { theme } = useTheme()
  const { viewer, actions } = useViewer()
  const [uploadImage, { loading: uploadLoading }] = useUploadImageMutation()
  const [updateUser, { loading: updateLoading }] = useUpdateUserMutation()
  const [avatar, setAvatar] = useState(viewer.avatar)

  const onChooseImagePress = async () => {
    const { RNFile } = await pickFromDevice('photo', {
      height: 1024,
      width: 1024,
      withCircleOverlay: true,
    })
    const response = await uploadImage({ variables: { file: RNFile } })

    if (response.data?.uploadImage.__typename === 'File') {
      setAvatar(response.data.uploadImage)
      await updateUser({
        variables: { data: { avatarID: response.data.uploadImage.id } },
      })
      await actions.updateMe()
    }
  }

  return (
    <Container>
      <Spacing />
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}>
        <Pressable
          style={{
            height: 200,
            width: 200,
            borderRadius: 100,
            backgroundColor: theme.palette.field,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {updateLoading || uploadLoading ? (
            <ActivityIndicator size={'large'} color={theme.palette.primary} />
          ) : (
            <Image
              source={{ uri: avatar?.path }}
              style={{
                height: 200,
                width: 200,
                borderRadius: 100,
              }}
            />
          )}
          <Pressable
            onPress={onChooseImagePress}
            style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: theme.palette.field,
              position: 'absolute',
              bottom: 0,
              right: 15,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 5,
            }}>
            <CameraIcon height={24} width={24} fill={'#000000'} />
          </Pressable>
        </Pressable>
        <Spacing value={20} steps={2} />
        <View style={{ width: '100%', backgroundColor: '#141821', borderRadius: 20, }}>
          <PersonalInfo />
          <ContactInfo />
        </View>
      </ScrollView>
    </Container>
  )
}
