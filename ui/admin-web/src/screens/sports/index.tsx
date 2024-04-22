import CardButton from '@/components/ui-lib/CardButton'
import FlexBetween from '@/components/ui-lib/FlexBetween'
import { Box } from '@mui/material'
import React from 'react'
import SportsList from './ui/SportsList'

export default function Sports() {
    const [isAddSport, setIsAddSport] = React.useState(false)
  return (
    <Box>
      <FlexBetween>
      <h1>Sports</h1>
      <Box marginTop={"-4rem"}>
        <CardButton text={"Add Sport"} onPress={() => {}}/>
      </Box>
      </FlexBetween>
      <Box>
       <SportsList />
      </Box> 
     {/* <AddSport isOpen={isAddSport} onClose={() => setIsAddSport(false)}/> */}
    </Box>
  )
}
