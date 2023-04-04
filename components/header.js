import {
  Container,
  Box,
  chakra
} from '@chakra-ui/react'

import Layout from './layouts/article'
import Image from 'next/image'

const HeaderImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Header = () => (
  <Layout>
    <Container>
      <Box
        borderColor="whiteAlpha.800"
        borderWidth={2}
        borderStyle="none"
        w="100%"
        h="100px"
        borderRadius="lg"
        display="inline-block"
        overflow="hidden">
        <HeaderImage
          src="/images/header.jpg"
          alt="header"
          borderRadius="lg"
          width="1000%"
          height="1000%" />
      </Box>
    
    </Container>
  </Layout>
)

export default Header
export { getServerSideProps } from './chakra'
