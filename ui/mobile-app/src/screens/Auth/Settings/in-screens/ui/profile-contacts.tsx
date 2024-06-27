import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { useViewer } from '@src/entities/viewer'
import { HorizontalInput } from '@src/component/ui-lib/inputs/horizontall-input'
import {
  PlayerContactInUpdate,
  useUpdatePlayerMutation,
} from '@src/shared/generated/types/graphql'
import React, { useState } from 'react'
import { DropDownContainer } from '@src/component/ui-lib/containers/drop-down-container'
import FooterButton from '@src/component/ui-lib/buttons/FooterButton'

export const ContactInfo = () => {
  const { viewer, actions } = useViewer()
  const [updateUser, { loading }] = useUpdatePlayerMutation()

  const [contact, setContact] = useState<PlayerContactInUpdate>({
    youtube: viewer.contact.youtube,
    instagram: viewer.contact.instagram,
    phone: viewer.contact.phone,
    twitter: viewer.contact.twitter,
    facebook: viewer.contact.facebook,
  })

  const onSave = async () => {
    await updateUser({ variables: { data: { contact } } })
    await actions.updateMe()
  }

  return (
    <DropDownContainer
      label='Contact Info'
      children={
        <>
          <HorizontalInput
            label='Phone Number:'
            onChange={value => {
              setContact(contact => ({ ...contact, phone: value }))
            }}
            value={contact.phone!!}
          />
          <HorizontalInput
            label='Youtube Link:'
            onChange={value => {
              setContact(contact => ({ ...contact, youtube: value }))
            }}
            value={contact.youtube!!}
          />
          <HorizontalInput
            label='Twitter (X):'
            onChange={value => {
              setContact(contact => ({ ...contact, twitter: value }))
            }}
            value={contact.twitter!!}
          />
          <HorizontalInput
            label='Instagram:'
            onChange={value => {
              setContact(contact => ({ ...contact, instagram: value }))
            }}
            value={contact.instagram!!}
          />
          <HorizontalInput
            label='Facebook:'
            onChange={value => {
              setContact(contact => ({ ...contact, facebook: value }))
            }}
            value={contact.facebook!!}
          />
          <Spacing value={20} steps={3} />
          <FooterButton
            label='Save'
            onPress={onSave}
            textColor='#fff'
            isLoading={loading}
          />
        </>
      }
    />
  )
}
