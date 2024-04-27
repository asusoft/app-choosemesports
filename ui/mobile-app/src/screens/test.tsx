//import liraries
import TextButton from '@src/component/ui-lib/buttons/TextButton'
import { Typography } from '@src/component/ui-lib/text/Typography'
import { useViewer } from '@src/entities/viewer'
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// create a component
const TestScreen = () => {
  const { viewer, actions } = useViewer()
  return (
    <View style={styles.container}>
      <Typography>TestScreen</Typography>
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
export default TestScreen
