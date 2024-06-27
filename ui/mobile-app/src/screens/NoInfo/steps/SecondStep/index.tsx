import { useTheme } from '@src/services/theme/hooks'
import React, { Component, useCallback, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { AdditionalFields, usePlayerInfo } from '../../model/use-player-info'
import { Typography } from '@src/component/ui-lib/text/Typography'
import { Banner } from '@src/img'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import GLOBAL_CONSTANTS from '@src/constants/constants'
import { TextInput } from '@src/component/ui-lib/inputs/TextInput'
import FooterButton from '@src/component/ui-lib/buttons/FooterButton'
import { PlayerAdditionalField } from '@src/shared/generated/types/graphql'

export const SecondStep = () => {
  const { theme } = useTheme()
  const { sport, handlers } = usePlayerInfo()

  const [additionalFields, setAdditionalFields] = useState<PlayerAdditionalField[]>([])

  const submit = () => {
    handlers.onAdditionalFieldAdded(additionalFields)
  }

  const isEnabled = useCallback(() => {
    if (!sport || !sport.uniqueFields || !additionalFields) {
      return false
    }

    const requestedLabels = sport.uniqueFields.map(field => field.label)
    const filledLabels = additionalFields.map(field => field.label)

    if (requestedLabels.length === 0) {
      return false
    }

    const allFieldsFilled = requestedLabels.every(label => filledLabels.includes(label))

    return allFieldsFilled
  }, [sport, additionalFields])

  const handleFieldChange = (value: string, label: string) => {
    if (value.trim() === '') {
      setAdditionalFields(prevFields => prevFields.filter(field => field.label !== label))
    } else {
      setAdditionalFields(prevFields => {
        const index = prevFields.findIndex(field => field.label === label)
        if (index !== -1) {
          const updatedFields = [...prevFields]
          updatedFields[index].value = value
          return updatedFields
        } else {
          return [...prevFields, { label, value }]
        }
      })
    }
  }

  return (
    <SafeAreaView
      style={{ ...styles.container, backgroundColor: theme.palette.background }}>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Banner />
      </View>
      <Spacing value={20} steps={2} />
      <View style={{ paddingHorizontal: GLOBAL_CONSTANTS.paddingHorizontal }}>
        <Typography children={'Provide Additional Information'} variant='sectionTitle' />
        <Spacing value={20} steps={2} />
        <View style={{ gap: 20 }}>
          {sport?.uniqueFields?.map((field, index) => (
            <TextInput
              key={index}
              onChange={value => handleFieldChange(value.toString(), field.label)}
              containerStyle={{
                width: '100%',
              }}
              inputContainerStyle={{
                borderWidth: 1,
                borderColor: theme.palette.border,
                borderRadius: 8,
                paddingHorizontal: 12,
              }}
              label={field.label}
            />
          ))}
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
          onPress={() => submit()}
          textColor='#fff'
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
