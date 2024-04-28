import React, { Component } from 'react'
import { Section } from './section-container'
import { PositionsList } from './list/positions-list'
import { useAppNavigation } from '@src/navigations/hooks'

export const Positions = () => {
  const { navigate } = useAppNavigation()
  return (
    <Section
      label='Positions'
      children={<PositionsList />}
      onAdd={() => navigate('AddPositionScreen')}
    />
  )
}
