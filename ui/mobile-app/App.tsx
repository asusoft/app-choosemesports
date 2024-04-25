import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo'
import { ThemeProvider } from '@src/services/theme/context'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from '@src/navigations/navigators/MainStack'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <ThemeProvider>
          <MainStack />
        </ThemeProvider>
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default App
