import React, { createContext, useCallback, useMemo, useState } from 'react'
import { IThemeContext, ThemeProviderProps } from '../types'
import { useGetGlobalTheme } from '../hooks'

export const ThemeContext = createContext({} as IThemeContext)

export const ThemeConsumer = ThemeContext.Consumer

export const ThemeProvider = ({
  children,
  theme: highPriorTheme,
}: ThemeProviderProps) => {
  const { theme, toggleTheme } = useGetGlobalTheme()

  const memoizedThemeContext = useMemo<IThemeContext>(
    () => ({ toggleTheme, theme: theme }),
    [toggleTheme, theme, highPriorTheme],
  )

  return (
    <ThemeContext.Provider value={memoizedThemeContext}>{children}</ThemeContext.Provider>
  )
}
