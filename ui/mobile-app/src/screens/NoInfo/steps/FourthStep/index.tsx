import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const ForthStep = () => {
  return (
    <View style={styles.container}>
      <Text>ForthStep</Text>
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
