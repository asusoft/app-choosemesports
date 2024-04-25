import React from 'react'
import { View } from 'react-native'

export const Spacing = ({ value = 8, steps = 1, direction = 'vertical' }) => (
  <View
    style={{
      [direction === 'horizontal' ? 'marginLeft' : 'marginTop']: value * steps,
    }}
  />
)
