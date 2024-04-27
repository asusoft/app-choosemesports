import { Typography } from '@src/component/ui-lib/text/Typography'
import { useTheme } from '@src/services/theme/hooks'
import { Sport } from '@src/shared/generated/types/graphql'
import React, { Component } from 'react'
import { Pressable } from 'react-native'

type SportTagProps = {
  item: Sport
  onPress: () => void
  selectedSpordID: String
}

export const SportTag = ({ item, onPress, selectedSpordID }: SportTagProps) => {
  const { theme } = useTheme()
  const isSelected = item.id === selectedSpordID

  const backgroundColor = isSelected ? theme.palette.primary : theme.palette.background
  const textColor = isSelected ? '#000000' : theme.palette.border
  const borderColor = isSelected ? theme.palette.primary : theme.palette.border

  return (
    <Pressable
      onPress={onPress}
      style={{
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor,
        backgroundColor,
      }}>
      <Typography
        children={item.id}
        variant='textButton'
        style={{
          color: textColor,
        }}
      />
    </Pressable>
  )
}
