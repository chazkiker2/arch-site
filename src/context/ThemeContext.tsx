import React from "react"


export interface Theme {
  displayName: string
  themeMode: "dark" | "light",
  isDark: boolean
}


export interface ThemeProviderProps {
  children: React.ReactNode
}

export interface ThemeProviderState {
  theme: Theme,
  toggleTheme: () => void
}

const defaultLightTheme: Theme = {
  displayName: "Light",
  themeMode: "light",
  isDark: false,
}
const defaultDarkTheme: Theme = {
  displayName: "Dark",
  themeMode: "dark",
  isDark: true,
}
const defaultTheme = defaultDarkTheme

export const ThemeContext = React.createContext<ThemeProviderState>({
  theme: defaultTheme,
  toggleTheme() {
    throw new Error(
      `ThemeContext not yet initialized. Cannot toggle theme until ThemeContext is initialized`
    )
  }
})

ThemeContext.displayName = "ThemeContext"

export function ThemeProvider(props: ThemeProviderProps) {
  const [theme, setTheme] = React.useState(defaultTheme)

  const value: ThemeProviderState = React.useMemo(
    () => ({
      theme,
      toggleTheme: () => {
        setTheme((t) => (t.isDark ? defaultLightTheme : defaultDarkTheme))
      },
    }),
    // eslint-disable-next-line
    [theme.themeMode]
  )

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const ThemeConsumer = ThemeContext.Consumer

export function useTheme() {
  return React.useContext(ThemeContext)
}
