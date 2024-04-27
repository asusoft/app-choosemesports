import {
  PlayerPositionIn,
  PlayerPosStatIn,
  Position,
} from '@src/shared/generated/types/graphql'
import React, { Component, useCallback, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Typography } from '../ui-lib/text/Typography'
import { TextInput } from '../ui-lib/inputs/TextInput'
import { useTheme } from '@src/services/theme/hooks'
import GLOBAL_CONSTANTS from '@src/constants/constants'
import FooterButton from '../ui-lib/buttons/FooterButton'

type PositionFormProps = {
  position: Position
  onSave: (positionIn: PlayerPositionIn) => void
  onClose?: () => void
}

export const PositionForm = ({ position, onSave, onClose }: PositionFormProps) => {
  const { theme } = useTheme()
  const [stats, setStats] = useState<PlayerPosStatIn[]>([])

  const submit = () => {
    onSave({ name: position.name, stats })
    onClose && onClose()
  }

  const isEnabled = useCallback(() => {
    if (!position || !position.stats || !stats) {
      return false
    }

    const requestedStats = position.stats.map(stat => stat.name)
    const filledStats = stats.map(stat => stat.label)

    if (requestedStats.length === 0) {
      return false
    }

    const allStatsFilled = requestedStats.every(label => filledStats.includes(label))

    return allStatsFilled
  }, [position, stats])

  const handleFieldChange = (value: string, label: string) => {
    if (value.trim() === '') {
      setStats(prevStats => prevStats.filter(stat => stat.label !== label))
    } else {
      setStats(prevStats => {
        const index = prevStats.findIndex(field => field.label === label)
        if (index !== -1) {
          const updatedFields = [...prevStats]
          updatedFields[index].value = value
          return updatedFields
        } else {
          return [...prevStats, { label, value }]
        }
      })
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {position && <Typography children={'Your Stats:'} variant='textButton' />}
      {position?.stats.map((stat, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{}}>
            <Typography children={stat.name} variant='textButton' />
          </View>
          <TextInput
            onChange={value => handleFieldChange(value.toString(), stat.name)}
            containerStyle={{
              width: '50%',
            }}
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: theme.palette.border,
              borderRadius: 8,
              paddingHorizontal: 12,
            }}
          />
        </View>
      ))}
      <View
        style={{
          position: 'absolute',
          bottom: 45,
          right: 5,
          left: 5,
        }}>
        <FooterButton
          disabled={!isEnabled()}
          label='Save'
          onPress={() => submit()}
          textColor='#000000'
        />
      </View>
    </View>
  )
}
