import React from 'react'
import { FullVideoFragment } from '@src/shared/generated/types/graphql'
import { Container } from './container'
import { Content } from './content'
import { useVideoCard } from '../model'

type VideoCardProps = {
  item: FullVideoFragment
}

export const Card = (props: VideoCardProps) => {
  const value = useVideoCard(props)

  return (
    <Container value={value}>
      <Content />
    </Container>
  )
}
