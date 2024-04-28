import { EditIcon, GearIcon } from '@src/component/icons'
import globalStyles from '@src/constants/styles'
import { useTheme } from '@src/services/theme/hooks'
import React, { Component } from 'react'
import { View, Pressable } from 'react-native'

export const HeaderButtons = () => {
  const { theme } = useTheme()
  const fill = theme.isDarkMode ? 'white' : 'black'
  return (
    <View style={{ flexDirection: 'row', gap: 12 }}>
      <Pressable
        onPress={() => {}}
        style={{ ...globalStyles.buttonContainer, backgroundColor: theme.palette.field }}>
        <EditIcon fill={fill} height={20} width={20} />
      </Pressable>
      <Pressable
        onPress={() => {}}
        style={{ ...globalStyles.buttonContainer, backgroundColor: theme.palette.field }}>
        <GearIcon fill={fill} />
      </Pressable>
    </View>
  )
}
