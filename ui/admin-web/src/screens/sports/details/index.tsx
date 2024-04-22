import { Box } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom';
import { useSport } from './model';
import { Content } from './ui/content';
import { Container } from './ui/container';

export default function SportDetails() {
    const { sportID } = useParams();

    if(!sportID) return null
    
    const value = useSport(sportID)

  return (
    <Container value={value}>
        <Content />
    </Container>
  )
}
