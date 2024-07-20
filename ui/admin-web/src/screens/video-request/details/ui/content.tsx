import React, { useState } from 'react'
import { useRequestContext } from '../model'
import { Box, Typography } from '@mui/material'
import CardButton from '@/components/ui-lib/CardButton'
import FlexBetween from '@/components/ui-lib/FlexBetween'
import ReactPlayer from 'react-player';
import { VideoRequestStatus } from '@/shared/generated/graphql/graphql'
import RejectVideo from './reject-video'

export const Content = () => {
  const { request, actions, isAccepting } = useRequestContext()

  const [openRejectModal, setOpenRejectModal] = useState(false)

  if (!request) return null

  return (
    <Box>
      <FlexBetween>
        <h1>{request.video.description}</h1>
        {request.requestStatus === VideoRequestStatus.Pending && <Box display={'flex'} gap={'1rem'}>
          <Box marginTop={"-4rem"}>
            <CardButton color='green' text={"Accept Request"} loading={isAccepting} onPress={() => actions.acceptVideo()} />
          </Box>
          <Box marginTop={"-4rem"}>
            <CardButton color='red' text={"Reject Request"} onPress={() => setOpenRejectModal(true)} />
          </Box>
        </Box>}
      </FlexBetween>
      <Box marginBottom={'5rem'}>
        <Box display={'flex'}>
            <Typography>{`${'Author: '}`}</Typography>
            <Typography>{`${request.video.author.name}`}</Typography>
        </Box>
        <Box display={'flex'}>
            <Typography>{`${'Status: '}`}</Typography>
            <Typography>{`${request.requestStatus}`}</Typography>
        </Box>
        <Box display={'flex'}>
            <Typography>{`${'Created At: '}`}</Typography>
            <Typography>{`${request.createdAt}`}</Typography>
        </Box>
      </Box>
      <ReactPlayer url={request.video.attachement.path} controls width="50%" height={'500px'} />
      <RejectVideo isOpen={openRejectModal} onClose={() => setOpenRejectModal(false)} />
    </Box>
  )
}
