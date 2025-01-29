import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./config/global/GlobalStyles";
import { AppRoutes } from "./config/routes/AppRoutes";
import { lightTheme } from "./config/themes";

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <AppRoutes />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
