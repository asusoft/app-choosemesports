import { ReactNode } from 'react'

export type AuthLayoutProps = {
  title: string
  subtitle: string
  Form: ReactNode
  renderBottomElement?: () => JSX.Element
}
