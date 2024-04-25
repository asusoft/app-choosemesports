import { ReactNode } from 'react'

export type AuthLayoutProps = {
  title: string
  subtitle: string
  children: ReactNode
  hideFooter?: boolean
}
