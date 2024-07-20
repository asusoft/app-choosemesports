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

export const BaseModal = ({ visible, onClose, children }: ModalProps) => {
  const { bottom } = useSafeAreaInsets()
  const { theme } = useTheme()
  return (
    <RNModal animationType='fade' transparent={true} visible={visible}>
      <View style={styles.outer}>
        <RNModal animationType='slide' transparent={true} visible={visible}>
          <Pressable onPress={onClose} style={{ ...styles.inner }}>
            <View style={styles.content}>
              <Pressable
                onPress={onClose}
                style={{ width: '100%', alignItems: 'center' }}>
                <View
                  style={[styles.line, { backgroundColor: theme.palette.placeholder }]}
                />
              </Pressable>
              <View
                style={{
                  padding: GLOBAL_CONSTANTS.paddingHorizontal,
                  marginBottom: bottom,
                }}>
                {children}
              </View>
            </View>
          </Pressable>
        </RNModal>
      </View>
    </RNModal>
  )
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 0,
  },
  inner: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 6,
    zIndex: 11,
  },
  content: {
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
  },
  line: {
    width: 50,
    height: 5,
    borderRadius: 100,
    marginVertical: 12,
  },
})
