import { PropsWithChildren } from 'react'
//@ts-ignore
import SwipeUpDownModal from 'react-native-swipe-modal-up-down'

type ModalProps = PropsWithChildren & {
  visible: boolean
  onClose: () => void
}

export const SwipeModal = ({ visible, onClose, children }: ModalProps) => {
  return (
    <SwipeUpDownModal
      modalVisible={visible}
      onClose={onClose}
      duration={500}
      ContentModal={<>{children}</>}
    />
  )
}
