//import liraries
import { useViewer } from '@src/entities/viewer'
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// create a component
const Screen1 = () => {
  const { viewer } = useViewer()
  return (
    <View style={styles.container}>
      <Text>{viewer.id}</Text>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
})

//make this component available to the app
export default Screen1
