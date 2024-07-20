import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import { useVideoRequests } from '../model';
import { useAppNavigation } from '@/navigation/hooks/use-app-navigation';

export default function RequestsList() {
  const { data } = useVideoRequests()
  const { navigateTo } = useAppNavigation()

  if(!data) return null

  const Requests = data.requests

  if(!Requests) return null

  return (
    <Grid
      container
      spacing={4}
      marginTop="2rem"
      direction="column"
    >
      {Requests.map((request, index) => (
        <Box 
           display={"flex"} 
           margin={"0rem 2rem"} 
           padding={"1rem 0rem"} 
           gap={"1rem"} 
           alignItems={"center"} 
           sx={{ borderBottom: "1px solid", borderColor: '#ECECEC'}}
           onClick={() => navigateTo(`${request.id}`)}
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
            {request.video.description} by  {request.video.author.name}
          </Typography>
        </Box>
      ))}
    </Grid>
  )
}
