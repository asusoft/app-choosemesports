import { ArrowIcon } from '@src/component/icons'
import { Typography } from '@src/component/ui-lib/text/Typography'
import { useTheme } from '@src/services/theme/hooks'
import React, { Component } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export const Section = ({ label, onPress }: { label: string; onPress: () => void }) => {
  const { theme } = useTheme()
  return (
    <View
      style={{
        height: 67,
        borderRadius: 12,
        backgroundColor: '#141821',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Typography variant='buttonText'>{label}</Typography>
      <Pressable
        onPress={onPress}
        style={{
          height: 35,
          width: 35,
          backgroundColor: theme.palette.border,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ArrowIcon height={22} width={22} fill={'#141821'} />
      </Pressable>
    </View>
  )
}
