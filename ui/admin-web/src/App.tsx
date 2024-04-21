import React, { useState } from 'react'
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';
import AppRoutes from './navigation/routes';


function App() {
  return (
    <ApolloProvider client={client}>
      <AppRoutes />
    </ApolloProvider>
  );
}

export default App
