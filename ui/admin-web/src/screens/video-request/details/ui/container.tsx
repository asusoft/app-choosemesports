import { ComponentProps, PropsWithChildren } from 'react'
import { RequestContextProvider } from '../model'
import { Box } from '@mui/material'

type Props = ComponentProps<typeof RequestContextProvider> & PropsWithChildren

export const Container = ({ value, children }: Props) => {

  return (
    <RequestContextProvider value={value}>
      <Box children={children} />
    </RequestContextProvider>
  )
}
