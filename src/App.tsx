import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>

    </ThemeProvider>
  )
}

export default App
