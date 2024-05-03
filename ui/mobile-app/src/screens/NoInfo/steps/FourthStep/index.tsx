import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { Typography } from '@src/component/ui-lib/text/Typography'
import GLOBAL_CONSTANTS from '@src/constants/constants'
import { useTheme } from '@src/services/theme/hooks'
import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import { usePlayerInfo } from '../../model'
import { Gender, PlayerPersonalInfoIn } from '@src/shared/generated/types/graphql'
import FooterButton from '@src/component/ui-lib/buttons/FooterButton'
import { TextInput } from '@src/component/ui-lib/inputs/TextInput'
import { DropdownInput } from '@src/component/ui-lib/inputs/DropdownInput'
import { nationalities } from '@src/constants/nationalities'
import { getCountryByCode } from '@src/utils/get-country'
import { ItemType } from 'react-native-dropdown-picker'
import { genders } from '@src/constants/genders'
import { formatDate, ISOToDate } from '@src/shared/lib/date'
import { DateInput } from '@src/component/ui-lib/inputs/DateInput/DateInput'
import { HorizontalInput } from '../../../../component/ui-lib/inputs/horizontall-input'

const DropDownInput = ({
  label,
  value,
  onChange,
  Item,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  Item: ItemType<string>[]
}) => {
  const { theme } = useTheme()

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 100,
      }}>
      <View style={{ marginTop: 8 }}>
        <Typography children={`${label}:`} variant='textButton' />
      </View>
      <View style={{ width: '50%' }}>
        <DropdownInput
          items={[{ label: '— Not choosen —', value: 'WITHOUT_THEME' }, ...Item]}
          placeholder={'— Not choosen —'}
          value={value}
          setValue={onChange}
          style={{
            height: 40,
            backgroundColor: theme.palette.background,
            borderColor: theme.palette.border,
            zIndex: 100,
          }}
        />
      </View>
    </View>
  )
}

export const ForthStep = () => {
  const { theme } = useTheme()
  const { handlers } = usePlayerInfo()

  const [countryCode, setCountryCode] = useState('WITHOUT_THEME')
  const [gender, setGender] = useState(Gender.Male)
  const [openDatePicker, setOpenDatePicker] = useState(false)

  const today = new Date()
  const maxDate = new Date(today.getFullYear() - 11, today.getMonth(), today.getDate())

  const [personal, setPersonal] = useState<PlayerPersonalInfoIn>({
    about: '',
    dateOfBirth: maxDate.toISOString(),
    gender: Gender.Male,
    height: '',
    nationality: {
      country: '',
      code: '',
    },
    weight: '',
  })

  const onCountryCodeChange = (id: any) => {
    setCountryCode(id)
    const country = getCountryByCode(id())
    if (country) {
      setPersonal(personal => ({ ...personal, nationality: country }))
    }
  }

  const onGenderChange = (id: any) => {
    setGender(id)
    setPersonal(personal => ({ ...personal, gender: id() }))
  }

  const isEnabled = () => {
    return (
      personal.about !== '' &&
      personal.dateOfBirth !== '' &&
      personal.gender !== undefined &&
      personal.height !== '' &&
      personal.weight !== '' &&
      personal.nationality !== undefined
    )
  }

  const submit = () => {
    handlers.onSavePersonalInfo(personal)
  }

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: theme.palette.background }}>
      <View style={{ paddingHorizontal: GLOBAL_CONSTANTS.paddingHorizontal }}>
        <Spacing value={12} />
        <Typography
          children={'Let’s know more about you'}
          variant='subHero'
          style={{
            textAlign: 'center',
          }}
        />
        <Spacing value={20} steps={2} />
        <View style={{ paddingHorizontal: GLOBAL_CONSTANTS.paddingHorizontal }}>
          <HorizontalInput
            label='Your Height (in M):'
            onChange={value => {
              setPersonal(personal => ({ ...personal, height: value }))
            }}
          />
          <HorizontalInput
            label='Your Weight (in Kg):'
            onChange={value => {
              setPersonal(personal => ({ ...personal, weight: value }))
            }}
          />
          <Spacing value={12} steps={1} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{ marginTop: 8 }}>
              <Typography children={'Date of Birth'} variant='textButton' />
            </View>
            <Pressable
              onPress={() => setOpenDatePicker(true)}
              style={{
                width: '50%',
                borderWidth: 1,
                borderColor: theme.palette.border,
                borderRadius: 8,
                height: 45,
                padding: 8,
                justifyContent: 'center',
              }}>
              <Typography
                children={formatDate(new Date(personal.dateOfBirth)).toString()}
                variant='textButton'
              />
            </Pressable>
            <DateInput
              onChange={value => {
                setPersonal(personal => ({ ...personal, dateOfBirth: value }))
                setOpenDatePicker(false)
              }}
              onCancel={() => setOpenDatePicker(false)}
              open={openDatePicker}
              value={personal.dateOfBirth}
              maxDate={maxDate}
            />
          </View>
          <Spacing value={12} steps={1} />
          <View style={{ zIndex: 100 }}>
            <DropDownInput
              label='Gender'
              Item={genders}
              onChange={onGenderChange}
              value={gender}
            />
          </View>
          <Spacing value={12} />
          <View
            style={{
              zIndex: -5,
            }}>
            <View style={{ marginVertical: 8 }}>
              <Typography children={`Nationality:`} variant='textButton' />
            </View>
            <View>
              <DropdownInput
                items={[
                  { label: '— Not choosen —', value: 'WITHOUT_THEME' },
                  ...nationalities,
                ]}
                placeholder={'— Not choosen —'}
                value={countryCode}
                setValue={onCountryCodeChange}
                style={{
                  height: 40,
                  backgroundColor: theme.palette.background,
                  borderColor: theme.palette.border,
                  zIndex: 100,
                }}
              />
            </View>
          </View>
          <Spacing value={20} />
          <View
            style={{
              zIndex: -10,
            }}>
            <View style={{ marginTop: 8 }}>
              <Typography children={`About you:`} variant='textButton' />
            </View>
            <View>
              <TextInput
                value={personal.about}
                onChange={value => {
                  setPersonal(personal => ({ ...personal, about: value.toString() }))
                }}
                containerStyle={{
                  width: '100%',
                  height: 100,
                }}
                inputContainerStyle={{
                  borderWidth: 1,
                  borderColor: theme.palette.border,
                  borderRadius: 8,
                  padding: 12,
                  height: 120,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}
                placeholder='Tell us something about yourself'
                multiline
                autoCapitalize='sentences'
                maxLength={200}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 45,
          right: GLOBAL_CONSTANTS.paddingHorizontal,
          left: GLOBAL_CONSTANTS.paddingHorizontal,
        }}>
        <FooterButton
          disabled={!isEnabled()}
          label='Next'
          onPress={submit}
          textColor='#000000'
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
