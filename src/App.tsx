import { Grommet } from "grommet"
import { grommet } from "grommet/themes"
import { useTheme } from "./context/ThemeContext"


function App() {
  const { theme } = useTheme()

  return (
    <Grommet full theme={grommet} themeMode={theme.isDark ? "dark" : "light"}>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Grommet>
  )
}


export default App
