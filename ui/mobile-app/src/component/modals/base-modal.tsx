import GLOBAL_CONSTANTS from '@src/constants/constants'
import { useTheme } from '@src/services/theme/hooks'
import { isIos } from '@src/shared/lib'
import React, { PropsWithChildren } from 'react'
import { Pressable, Modal as RNModal, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type ModalProps = PropsWithChildren & {
  visible: boolean
  onClose: () => void
}

export type { ModalProps as BaseModalProps }

const CancelButton = ({ onPress }: { onPress: () => void }) => {
  const { theme } = useTheme()
  return (
    <Pressable
      style={{
        borderRadius: 10,
        width: '100%',
        paddingVertical: 18,
        alignItems: 'center',
        backgroundColor: theme.palette.background,
      }}
      onPress={onPress}>
      <Text
        style={{
          fontFamily: 'SF Pro Display',
          fontSize: 20,
          fontWeight: '500',
          color: '#007AFF',
        }}>
        Cancel
      </Text>
    </Pressable>
  )
}

export const BaseModal = ({ visible, onClose, children }: ModalProps) => {
  const { bottom } = useSafeAreaInsets()
  return (
    <RNModal animationType='fade' transparent={true} visible={visible}>
      <View style={styles.outer}>
        <RNModal animationType='slide' transparent={true} visible={visible}>
          <Pressable onPress={onClose} style={{ ...styles.inner, paddingBottom: bottom }}>
            <View style={styles.content}>{children}</View>
            <CancelButton onPress={onClose} />
          </Pressable>
        </RNModal>
      </View>
    </RNModal>
  )
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: isIos ? 'rgba(0, 0, 0, 0.4)' : undefined,
  },
  inner: {
    paddingHorizontal: GLOBAL_CONSTANTS.paddingHorizontal,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: !isIos ? 'rgba(0, 0, 0, 0.4)' : undefined,
  },
  content: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    marginBottom: 6,
    width: '100%',
  },
})
