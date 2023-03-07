import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Router } from "./Router";

import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router /> 
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
