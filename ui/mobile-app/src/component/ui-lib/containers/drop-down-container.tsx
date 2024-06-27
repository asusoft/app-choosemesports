import { ArrowDownIcon, ArrowIcon, CloseIcon, PlusIcon } from '@src/component/icons'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { Typography } from '@src/component/ui-lib/text/Typography'
import { useTheme } from '@src/services/theme/hooks'
import React, { PropsWithChildren, useState } from 'react'
import { View, Pressable } from 'react-native'

export type SectionProps = {
  label: string
} & PropsWithChildren

export const DropDownContainer = ({ label, children }: SectionProps) => {
  const { theme } = useTheme()
  const [show, setShow] = useState(false)
  return (
    <View style={{ backgroundColor: theme.palette.container, borderRadius: 20, paddingHorizontal: 20 }}>
      <View style={{ borderRadius: 20, paddingVertical: 20 }}>
        <Pressable
          onPress={() => setShow(s => !s)}
          style={{
            flexDirection: 'row',
            gap: 8,
          }}>
          <Typography variant='buttonText'>{label}</Typography>
          <View
            style={{
              height: 25,
              width: 25,
              borderRadius: 15,
              backgroundColor: theme.palette.border,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 'auto',
            }}>
            {show ? (
              <ArrowDownIcon height={24} width={24} stroke={'#141821'} />
            ) : (
              <ArrowIcon height={12} width={12} fill={'#141821'} />
            )}
          </View>
        </Pressable>
        {show && children && (
          <>
            <Spacing value={20} />
            {children}
          </>
        )}
      </View>
    </View>
  )
}
