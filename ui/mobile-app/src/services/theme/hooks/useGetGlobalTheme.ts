import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  darkThemePallete as darkSchema,
  lightThemePallete as lightSchema,
} from '../palettes'
import { Theme } from '../types'

export const useGetGlobalTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const darkTheme: Theme = {
    palette: darkSchema,
    isDarkMode: true,
  }

  const lightTheme = {
    palette: lightSchema,
    isDarkMode: false,
  }

  const preferredTheme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode],
  )

  const [theme, setTheme] = useState<Theme>(preferredTheme)

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode)
  }, [])

  useEffect(() => {
    setTheme(isDarkMode ? darkTheme : lightTheme)
  }, [isDarkMode])

  return {
    theme,
    toggleTheme,
  }
}
