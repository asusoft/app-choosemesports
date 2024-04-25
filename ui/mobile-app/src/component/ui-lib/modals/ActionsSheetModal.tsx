import { BaseModal, BaseModalProps } from '@src/component/modals/base-modal'
import { useTheme } from '@src/services/theme/hooks'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Typography } from '../text/Typography'
type Action = {
  label?: string
  onActionPress: () => void
  labelColor?: string
  Icon?: any
}

type ActionsSheetModalProps = {
  actions: Action[]
} & BaseModalProps

type ActopnProps = {
  action: Action
}

const Action = ({ action }: ActopnProps) => {
  const { theme } = useTheme()
  const { Icon, label, onActionPress, labelColor } = action
  return (
    <Pressable
      onPress={onActionPress}
      style={{
        ...styles.actionContainer,
        backgroundColor: theme.palette.background,
      }}>
      <View style={{ flex: label ? 0.1 : 1, justifyContent: 'center' }}>
        {Icon && <Icon />}
      </View>
      {label && (
        <View style={{ flex: 1 }}>
          <Typography
            variant='textButton'
            {...(labelColor && { style: { color: labelColor } })}>
            {label}
          </Typography>
        </View>
      )}
    </Pressable>
  )
}

const ActionsSheetModal = ({ actions, visible, onClose }: ActionsSheetModalProps) => {
  return (
    <BaseModal visible={visible} onClose={onClose}>
      {actions.map((action, index) => (
        <Action key={index} action={action} />
      ))}
    </BaseModal>
  )
}

export default ActionsSheetModal

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  actionText: {
    fontFamily: 'SF Pro Display',
    fontWeight: '500',
    fontSize: 20,
  },
})
