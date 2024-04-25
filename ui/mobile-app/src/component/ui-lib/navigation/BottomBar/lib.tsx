import React from 'react'
import { Theme } from '@src/services/theme/types'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BOTTOM_BAR_CONSTANTS } from './constants'
import { BottomBarTab } from '@src/navigations/types/BottomBar.types'
import { bottomBarIcons } from '@src/component/icons'
import { SvgComponent } from '@src/shared/types'

const { FeedsIcon, HomeIcon, LibraryIcon, ProfileIcon, SearchIcon } = bottomBarIcons

export const getIcon =
  (tabName: BottomBarTab, isFocused: boolean, theme: Theme): SvgComponent =>
  () => {
    const fill = '#F16133'

    switch (tabName) {
      case 'Home':
        return <HomeIcon fill={isFocused ? fill : theme.palette.typography} />
      case 'Feed':
        return <FeedsIcon fill={isFocused ? fill : theme.palette.typography} />
      case 'Library':
        return <LibraryIcon fill={isFocused ? fill : theme.palette.typography} />
      case 'Search':
        return <SearchIcon fill={isFocused ? fill : theme.palette.typography} />
      case 'Profile':
        return <ProfileIcon fill={isFocused ? fill : theme.palette.typography} />
    }
  }

export const useBottomBarHeight = () => {
  const { bottom } = useSafeAreaInsets()
  const height =
    bottom +
    BOTTOM_BAR_CONSTANTS.paddingVertical * 2 +
    BOTTOM_BAR_CONSTANTS.iconHeight +
    BOTTOM_BAR_CONSTANTS.borderWidth * 2.3
  return height
}
