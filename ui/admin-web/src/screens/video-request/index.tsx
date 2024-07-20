import CardButton from '@/components/ui-lib/CardButton'
import FlexBetween from '@/components/ui-lib/FlexBetween'
import { Box } from '@mui/material'
import React from 'react'
import RequestsList from './ui/RequestsList'

export default function VideoRequests() {
  return (
    <Box>
      <FlexBetween>
      <h1>Video Requests</h1>
      </FlexBetween>
      <Box>
       <RequestsList />
      </Box> 
    </Box>
  )
}
