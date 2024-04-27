import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const FifthStep = () => {
  return (
    <View style={styles.container}>
      <Text>FifthStep</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
})
