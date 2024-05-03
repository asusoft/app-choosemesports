import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { useViewer } from '@src/entities/viewer'
import { HorizontalInput } from '@src/component/ui-lib/inputs/horizontall-input'
import {
  PlayerContactInUpdate,
  PlayerPersonalInfo,
  useUpdatePlayerMutation,
} from '@src/shared/generated/types/graphql'
import React, { useState } from 'react'
import { DropDownContainer } from '@src/component/ui-lib/containers/drop-down-container'
import FooterButton from '@src/component/ui-lib/buttons/FooterButton'
import { formatDate } from '@src/shared/lib/date'

export const PersonalInfo = () => {
  const { viewer, actions } = useViewer()
  const [updateUser, { loading }] = useUpdatePlayerMutation()

  const [personal, setPersonal] = useState<PlayerPersonalInfo>({
    about: viewer.personal.about,
    dateOfBirth: viewer.personal.dateOfBirth,
    gender: viewer.personal.gender,
    height: viewer.personal.height,
    nationality: viewer.personal.nationality,
    weight: viewer.personal.weight,
  })

  const onSave = async () => {
    await updateUser({
      variables: {
        data: {
          personal: {
            about: personal.about,
            height: personal.height,
            weight: personal.weight,
          },
        },
      },
    })
    await actions.updateMe()
  }

  return (
    <DropDownContainer
      label='Personal Info'
      children={
        <>
          <HorizontalInput
            label='About you:'
            onChange={value => {
              setPersonal(personal => ({ ...personal, about: value }))
            }}
            value={personal.about!!}
          />
          <HorizontalInput
            label='Date Of Birth:'
            onChange={value => {
              setPersonal(personal => ({ ...personal, dateOfBirth: value }))
            }}
            value={formatDate(new Date(personal.dateOfBirth!!))}
            disabled
          />
          <HorizontalInput
            label='Gender:'
            onChange={() => {}}
            value={personal.gender!!}
            disabled
          />
          <HorizontalInput
            label='Nationality'
            onChange={() => {}}
            value={personal.nationality?.country!!}
            disabled
          />
          <HorizontalInput
            label='Height:'
            onChange={value => {
              setPersonal(personal => ({ ...personal, height: value }))
            }}
            value={personal.height!!}
          />
           <HorizontalInput
            label='Weight:'
            onChange={value => {
              setPersonal(personal => ({ ...personal, weight: value }))
            }}
            value={personal.weight!!}
          />
          <Spacing value={20} steps={3} />
          <FooterButton
            label='Save'
            onPress={onSave}
            textColor='#000000'
            isLoading={loading}
          />
        </>
      }
    />
  )
}
