import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React, { useCallback } from 'react'
import { View, Pressable } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { getIcon } from './lib'
import { BOTTOM_BAR_CONSTANTS } from './constants'
import { useTheme } from '@src/services/theme/hooks'
import { BottomBarTab } from '@src/navigations/types/BottomBar.types'
import { Typography } from '../../text/Typography'

export const BarUI = ({ state, navigation }: BottomTabBarProps) => {
  const { theme } = useTheme()
  const inests = useSafeAreaInsets()

  return (
    <View
      style={{
        justifyContent: 'space-around',
        flexDirection: 'row',
        backgroundColor: theme.palette.background,
        borderTopWidth: BOTTOM_BAR_CONSTANTS.borderWidth,
        borderColor: theme.isDarkMode ? '#6A6A6A' : '#E0E0E0',
        paddingBottom: inests.bottom,
      }}>
      {state.routes.map((route, index) => {
        const isFocused = state.index == index

        const Icon = getIcon(route.name as BottomBarTab, isFocused, theme)

        const onTabPress = useCallback(async () => {
          navigation.navigate(route.name)
        }, [route, navigation])

        return (
          <View
            style={{
              paddingVertical: BOTTOM_BAR_CONSTANTS.paddingVertical,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            key={route.key}>
            <Pressable
              onPress={onTabPress}
              style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Icon
                height={BOTTOM_BAR_CONSTANTS.iconHeight}
                width={BOTTOM_BAR_CONSTANTS.iconHeight}
              />
            </Pressable>
          </View>
        )
      })}
    </View>
  )
}
