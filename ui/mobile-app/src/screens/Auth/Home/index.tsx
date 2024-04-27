//import liraries
import TextButton from '@src/component/ui-lib/buttons/TextButton'
import { useViewer } from '@src/entities/viewer'
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// create a component
const HomeScreen = () => {
  const { viewer, actions } = useViewer()
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TextButton label={'Logout'} onPress={() => actions.logout()} />
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
export default HomeScreen
