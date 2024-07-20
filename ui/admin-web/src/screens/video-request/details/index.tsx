import { Box } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom';
import { useRequest } from './model';
import { Content } from './ui/content';
import { Container } from './ui/container';

export default function RequestDetails() {
    const { requestID } = useParams();

    if (!requestID) return null

    const value = useRequest(requestID)

    return (
        <Container value={value}>
            <Content />
        </Container>
    )
}
