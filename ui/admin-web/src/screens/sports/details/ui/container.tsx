import { ComponentProps, PropsWithChildren } from 'react'
import { SportContextProvider } from '../model'
import { Box } from '@mui/material'

type Props = ComponentProps<typeof SportContextProvider> & PropsWithChildren

export const Container = ({ value, children }: Props) => {

  return (
    <SportContextProvider value={value}>
      <Box children={children} />
    </SportContextProvider>
  )
}
