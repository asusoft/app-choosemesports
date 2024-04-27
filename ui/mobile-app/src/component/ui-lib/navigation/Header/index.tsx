import React from 'react'
import { useCallback } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Spacing } from '../../separators/spacing'
import { HEADER_CONSTANTS } from './constants'
import { useAppNavigation } from '@src/navigations/hooks'
import { useTheme } from '@src/services/theme/hooks'
import { ArrowLeftIcon } from '@src/component/icons'
import { Typography } from '../../text/Typography'

export type HeaderProps = {
  leftElement?: () => JSX.Element
  centralElement?: () => JSX.Element
  rightElement?: () => JSX.Element
  forceBackButton?: boolean
  variant?: 'TRANSPARENT' | 'COLORED'
} & { options?: { title?: string } }

export const Header = ({
  leftElement,
  centralElement,
  rightElement,
  forceBackButton,
  options,
  variant = 'COLORED',
}: HeaderProps) => {
  const { goBack, getState } = useAppNavigation()
  const { theme } = useTheme()
  const backgroundColor =
    variant === 'TRANSPARENT' ? 'transparent' : theme.palette.background
  const { top: paddingTop } = useSafeAreaInsets()
  const fill = theme.palette.typography

  const canGoBack = getState().routes.length > 1

  const showBackButton = forceBackButton || canGoBack

  const renderLeftElement = useCallback(() => {
    if (leftElement) {
      return leftElement()
    }
  }, [leftElement, options])

  const renderCentralElement = useCallback(() => {
    if (centralElement) {
      return centralElement()
    }
    if (options?.title) {
      return <Typography variant='userName' children={options?.title} />
    }
  }, [centralElement, options])

  const renderRightElement = useCallback(() => {
    if (rightElement) {
      return rightElement()
    }
    return null
  }, [rightElement])

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor,
        paddingTop,
      }}>
      <Pressable disabled={!showBackButton} onPress={goBack} style={styles.sideElement}>
        {leftElement ? (
          renderLeftElement()
        ) : showBackButton ? (
          <ArrowLeftIcon height={HEADER_CONSTANTS.iconSize} fill={fill} />
        ) : (
          <Spacing value={HEADER_CONSTANTS.iconSize} />
        )}
      </Pressable>
      <View style={styles.centralElement}>{renderCentralElement()}</View>
      <View
        style={{
          ...styles.sideElement,
          alignItems: 'flex-end',
        }}>
        {renderRightElement()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
  },
  sideElement: {
    padding: 16,
    flex: 1,
  },
  centralElement: {
    alignItems: 'center',
    paddingVertical: 10,
  },
})
