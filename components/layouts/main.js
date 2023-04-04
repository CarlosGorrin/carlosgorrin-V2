import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
// import Header from '../header'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Carlos' homepage" />
        <meta name="author" content="Carlos Gorrin" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Carlos Gorrin" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@speedtetris" />
        <meta property="og:site_name" content="Carlos Gorrin" />
        <meta name="og:title" content="Carlos Gorrin" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.carlosgorrin.com.png" />
        <title>Carlos Gorrin - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {/* <Header /> */}
        <br />
        <br />
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
