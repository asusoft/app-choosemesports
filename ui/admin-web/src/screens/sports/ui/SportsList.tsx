import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import { useSports } from '../model';
import { useAppNavigation } from '@/navigation/hooks/use-app-navigation';

export default function SportsList() {
  const { data } = useSports()
  const { navigateTo } = useAppNavigation()

  if(!data) return null

  const Sports = data.sports

  if(!Sports) return null

  return (
    <Grid
      container
      spacing={4}
      marginTop="2rem"
      direction="column"
    >
      {Sports.map((sport, index) => (
        <Box 
           display={"flex"} 
           margin={"0rem 2rem"} 
           padding={"1rem 0rem"} 
           gap={"1rem"} 
           alignItems={"center"} 
           sx={{ borderBottom: "1px solid", borderColor: '#ECECEC'}}
           onClick={() => navigateTo(`${sport.id}`)}
        >
          <Typography
            fontSize="18px"
            fontWeight="bold"
            gutterBottom
            fontFamily="Sora"
            color="#000"
            sx={{
              "&:hover": {
                cursor: 'pointer'
              }
            }}
          >
            {sport.name}
          </Typography>
        </Box>
      ))}
    </Grid>
  )
}
