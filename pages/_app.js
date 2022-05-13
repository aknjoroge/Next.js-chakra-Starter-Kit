import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "../styles/globals.css";
import defaultTheme from "././../theme/theme";
const theme = extendTheme({
  theme: defaultTheme.config.initialColorMode,
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
