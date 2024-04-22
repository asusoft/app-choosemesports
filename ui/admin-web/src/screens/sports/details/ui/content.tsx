import React from 'react'
import { useSportContext } from '../model'
import { Box } from '@mui/material'

export const Content = () => {

  const { sport } = useSportContext()
  return (
    <Box>
      <h1>Sport Details {sport?.name}</h1>
   </Box>
  )
}
