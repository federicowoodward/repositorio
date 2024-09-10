import "../styles/global.css";
import { AppProvider } from "../context/AppContext";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp;
