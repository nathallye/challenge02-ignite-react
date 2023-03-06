import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { DefaultLayout } from "./layouts/DefaultLayout";

import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <DefaultLayout /> {/*TODO: Mudar para o router depois*/}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
