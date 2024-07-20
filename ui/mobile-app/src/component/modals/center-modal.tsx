import GLOBAL_CONSTANTS from '@src/constants/constants'
import React, { PropsWithChildren } from 'react'
import { Pressable, Modal as RNModal, StyleSheet, View } from 'react-native'

type ModalProps = PropsWithChildren & {
  visible: boolean
  onClose: () => void
}

export type { ModalProps as BaseModalProps }

export const CenterModal = ({ visible, onClose, children }: ModalProps) => {
  return (
    <RNModal animationType='fade' transparent={true} visible={visible}>
      <View style={styles.outer}>
        <Pressable onPress={onClose} style={{ ...styles.inner }}>
          <View style={styles.content}>
            <View
              style={{
                padding: GLOBAL_CONSTANTS.paddingHorizontal,
              }}>
              {children}
            </View>
          </View>
        </Pressable>
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
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    zIndex: 11,
    padding: GLOBAL_CONSTANTS.paddingHorizontal,
  },
  content: {
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
  },
})
