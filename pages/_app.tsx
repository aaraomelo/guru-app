import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from "../utils/theme";
import Layout from '../components/Layout';
import { StoreProvider } from '../store';

function MyApp({ Component, pageProps }: AppProps) {

  return <StoreProvider>
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </StoreProvider>
}

export default MyApp
