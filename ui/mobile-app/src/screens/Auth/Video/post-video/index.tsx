import { PlusIcon, TrashIcon } from '@src/component/icons'
import FooterButton from '@src/component/ui-lib/buttons/FooterButton'
import { Container } from '@src/component/ui-lib/containers/page-container'
import { TextInput } from '@src/component/ui-lib/inputs/TextInput'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { Typography } from '@src/component/ui-lib/text/Typography'
import GLOBAL_CONSTANTS from '@src/constants/constants'
import { useViewer } from '@src/entities/viewer'
import { pickFromDevice } from '@src/lib/pick-from-device'
import { useAppNavigation } from '@src/navigations/hooks'
import { useTheme } from '@src/services/theme/hooks'
import {
  usePostVideoMutation,
  useRequestApprovalMutation,
  useUploadVideoMutation,
  VideoIn,
} from '@src/shared/generated/types/graphql'
import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native'


export const PostVideoScreen = () => {
  const { theme } = useTheme()
  const { viewer, actions } = useViewer()
  const navigation = useAppNavigation()
  const [uploadVideo, { loading: uploadLoading }] = useUploadVideoMutation()
  const [postVideo, { loading: postLoading }] = usePostVideoMutation()
  const [requestApproval] = useRequestApprovalMutation()
  const [videoIn, setVideoIn] = useState<VideoIn>({
    videoID: '',
    description: '',
  })

  const isEnabled = () => {
    return videoIn.videoID !== '' && videoIn.description !== ''
  }

  const onChooseVideoPress = async () => {
    const { RNFile } = await pickFromDevice('any')

    const response = await uploadVideo({ variables: { file: RNFile } })

    if (response.data && response.data?.uploadVideo.__typename === 'File') {
      const videoID = response.data.uploadVideo.id
      setVideoIn(vidIn => ({ ...vidIn, videoID }))
    }

    if(response.data?.uploadVideo.__typename === 'BaseError'){
        console.log(response.data?.uploadVideo.status)
    }
  }

  const onSave = async () => {
    if (videoIn) {
      const response = await postVideo({ variables: { input: videoIn } })
      if (response.data?.postVideo.__typename === 'Video') {
        const vidId = response.data?.postVideo.id
        await requestApproval({ variables: { id: vidId } })
      }
      navigation.goBack()
    }
  }

  const onDelete = () => {
    setVideoIn(vidIn => ({ ...vidIn, videoID: '' }))
  }

  return (
    <Container>
        <Typography variant='subHero'>Post a video of your skills</Typography>
        <Spacing value={20} steps={2}/>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 180,
            width: '100%',
            borderRadius: 20,
            backgroundColor: theme.palette.field,
          }}>
          {videoIn.videoID ? (
            <Pressable 
            onPress={onDelete}
            style={{
                height: 40, width: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center',
                 backgroundColor: 'rgba(0, 0, 0, 0.7)',
                 position: 'absolute',
                 bottom: 5, right: 10
            }}>
                <TrashIcon height={20} width={20} fill={theme.palette.placeholder}/>
            </Pressable>
          ) : (
            <Pressable
              onPress={onChooseVideoPress}
              style={{
                height: 60,
                width: 60,
                borderRadius: 40,
                position: 'absolute',
                top: 60,
                left: '42%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {uploadLoading ? (
                <ActivityIndicator />
              ) : (
                <PlusIcon height={30} width={30} fill={theme.palette.placeholder} />
              )}
            </Pressable>
          )}

        </View>
        <Spacing />
        <TextInput
          value={videoIn.description!!}
          onChange={value =>
            setVideoIn(vidIn => ({ ...vidIn, description: value.toString() }))
          }
          containerStyle={{ width: '100%' }}
          placeholder='Description'
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 45,
          right: GLOBAL_CONSTANTS.paddingHorizontal,
          left: GLOBAL_CONSTANTS.paddingHorizontal,
          gap: 12,
        }}>
        <FooterButton
          isLoading={postLoading}
          label='Save'
          onPress={onSave}
          textColor='#000000'
          disabled={!isEnabled()}
        />
      </View>
    </Container>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
})
