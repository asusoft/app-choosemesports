import React, { useState } from 'react'
import { useSportContext } from '../model'
import { Box, Typography } from '@mui/material'
import CardButton from '@/components/ui-lib/CardButton'
import FlexBetween from '@/components/ui-lib/FlexBetween'
import Table from '@/components/ui-lib/table'
import AddPosition from './add-position'
import AddUniqueField from './add-unique-field'

export const Content = () => {
  const [isAddPosition, setAddPosition] = useState(false)
  const [isAddUniqueField, setAddUniqueField] = useState(false)

  const { sport } = useSportContext()

  if (!sport) return null

  return (
    <Box>
      <FlexBetween>
        <h1>{sport.name}</h1>
        <Box display={'flex'} gap={'1rem'}>
          <Box marginTop={"-4rem"}>
            <CardButton text={"Add Position"} onPress={() => setAddPosition(true)} />
          </Box>
          <Box marginTop={"-4rem"}>
            <CardButton text={"Add Required Field"} onPress={() => setAddUniqueField(true)} />
          </Box>
        </Box>
      </FlexBetween>
      {sport.uniqueFields && <Box marginTop={'1.5rem'} display={'flex'} flexDirection={'column'} gap={'1rem'}>
        <Typography fontSize={'26px'}>Required Field</Typography>
      </Box>}
      <Box marginTop={'1.5rem'} display={'flex'} flexDirection={'column'} gap={'1rem'}>
        <Typography fontSize={'26px'}>Positions</Typography>
        <Table />
      </Box>
      <Box>
      </Box>
      <AddPosition isOpen={isAddPosition} onClose={() => setAddPosition(false)} />
      <AddUniqueField isOpen={isAddUniqueField} onClose={() => setAddUniqueField(false)} />
    </Box>
  )
}
