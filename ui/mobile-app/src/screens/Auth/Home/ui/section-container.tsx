import { ArrowDownIcon, ArrowIcon, CloseIcon, PlusIcon } from '@src/component/icons'
import { Spacing } from '@src/component/ui-lib/separators/spacing'
import { Typography } from '@src/component/ui-lib/text/Typography'
import { useTheme } from '@src/services/theme/hooks'
import React, { PropsWithChildren, useState } from 'react'
import { View, Pressable } from 'react-native'

export type SectionProps = {
  label: string
  onAdd: () => void
} & PropsWithChildren

export const Section = ({ label, children, onAdd }: SectionProps) => {
  const { theme } = useTheme()
  return (
    <View style={{ backgroundColor: theme.palette.container, borderRadius: 20, paddingHorizontal: 20 }}>
      <View style={{ borderRadius: 20, paddingVertical: 20 }}>
        <Pressable
          onPress={onAdd}
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
            <PlusIcon height={12} width={12} fill={'#000'} />
          </View>
        </Pressable>
        {children && (
          <>
            <Spacing value={20} />
            {children}
          </>
        )}
      </View>
    </View>
  )
}
