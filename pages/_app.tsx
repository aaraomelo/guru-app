import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from "../utils/theme";
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={customTheme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
}

export default MyApp
