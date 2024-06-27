import { PositionForm } from '@src/component/forms/position-form'
import { SwipeModal } from '@src/component/modals/swipe-modal'
import FooterButton from '@src/component/ui-lib/buttons/FooterButton'
import { DropdownInput } from '@src/component/ui-lib/inputs/DropdownInput'
import { TextInput } from '@src/component/ui-lib/inputs/TextInput'
import { LineSeparator } from '@src/component/ui-lib/separators/line-separator'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { Typography } from '@src/component/ui-lib/text/Typography'
import GLOBAL_CONSTANTS from '@src/constants/constants'
import { GLOBAL_PADDING } from '@src/constants/styles'
import { usePlayerInfo } from '@src/screens/NoInfo/model'
import { useTheme } from '@src/services/theme/hooks'
import React, { useEffect, useState } from 'react'
import { View, Pressable } from 'react-native'

export const PositionsModal = ({
  visible,
  onClose,
}: {
  visible: boolean
  onClose: () => void
}) => {
  const { theme } = useTheme()
  const { sport, handlers, selectedPosition } = usePlayerInfo()

  const [items, setItems] = useState<{ label: string; value: string }[]>([])
  const [positionId, setPositionId] = useState<string>('WITHOUT_THEME')

  useEffect(() => {
    const sportPositions = sport?.positions?.positions
    setItems([
      ...(sportPositions
        ? sportPositions.map(position => ({
            label: position.name,
            value: position.id,
          }))
        : []),
    ])
  }, [sport])

  const onIDChange = (id: any) => {
    setPositionId(id)
    handlers.onSelectedPositionIdChange(id())
  }

  if (!sport?.positions) return null
  return (
    <SwipeModal visible={visible} onClose={onClose}>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.palette.background,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          padding: GLOBAL_PADDING,
        }}>
        <Pressable onPress={onClose} style={{ alignItems: 'center' }}>
          <LineSeparator tickness={2} width={'15%'} />
        </Pressable>
        <Spacing value={20} />
        <DropdownInput
          items={[{ label: '— Not choosen —', value: 'WITHOUT_THEME' }, ...items]}
          placeholder='Positions'
          value={positionId}
          setValue={onIDChange}
        />
        <Spacing value={20} steps={2} />
        {selectedPosition && (
          <PositionForm
            position={selectedPosition}
            onSave={handlers.onAddSinglePosition}
            onClose={() => {
              setPositionId('')
              onClose()
            }}
          />
        )}
      </View>
    </SwipeModal>
  )
}
