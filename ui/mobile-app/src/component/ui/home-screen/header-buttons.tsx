import { GearIcon } from '@src/component/icons'
import globalStyles from '@src/constants/styles'
import { useAppNavigation } from '@src/navigations/hooks'
import { useTheme } from '@src/services/theme/hooks'
import React from 'react'
import { View, Pressable } from 'react-native'

export const HeaderButtons = () => {
  const { theme } = useTheme()
  const fill = theme.isDarkMode ? 'white' : 'black'
  const { navigate } = useAppNavigation()
  return (
    <View style={{ flexDirection: 'row', gap: 12 }}>
      <Pressable
        onPress={() => navigate('SettingsScreen')}
        style={{ ...globalStyles.buttonContainer, backgroundColor: theme.palette.field }}>
        <GearIcon fill={fill} />
      </Pressable>
    </View>
  )
}
