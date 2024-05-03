import { ArrowIcon } from '@src/component/icons'
import { Typography } from '@src/component/ui-lib/text/Typography'
import React, { Component } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

export const Item = ({ label, onPress }: { label: string; onPress: () => void }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: 'row',
      }}>
      <Typography variant='buttonText'>{label}</Typography>
      <View
        style={{
          height: 25,
          width: 25,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 'auto',
        }}>
        <ArrowIcon height={12} width={12} fill={'#FFFFFF'} />
      </View>
    </Pressable>
  )
}
