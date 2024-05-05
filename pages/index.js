import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a developer based in Buenos Aires!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Carlos Gonzalo Gorrin
          </Heading>
          <p>Web Developer / Cybersecurity Analist</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center">
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="150px"
            h="150px"
            display="inline-block"
            borderRadius="10%"
            overflow="hidden">
            <ProfileImage
              src="/images/carlos.jpg"
              alt="Profile image"
              borderRadius="0"
              width="150%"
              height="150%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Intro
        </Heading>
        <Paragraph>
            I design and develop custom web apps with a focus on user experience, mobile compatibility, performance optimization, and accessibility. I prioritize clean and reusable code.
        </Paragraph>
        <Paragraph>
            My work involves collaborating with clients and professionals worldwide. This global outlook has enriched my problem-solving skills and allowed me to create secure, innovative, and inclusive solutions for various projects.
        </Paragraph>
        <Paragraph>
            In recent years, my interest in cybersecurity has grown, which expanded further following the successful completion of the Google Cybersecurity Professional Certificate. I continuously expand my technical toolkit, currently exploring emerging technologies such as cloud infrastructure (AWS, Azure), containerization (Docker, Kubernetes), and AI & machine learning frameworks (TensorFlow). Currently based in Buenos Aires, Argentina.
        </Paragraph>
        <Paragraph>
            I am available for exciting projects of any size and complexity, whether you want to create a website, launch a brand, or improve your web app. Please feel free to contact me with your ideas.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/work" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Stack
        </Heading>
        <Paragraph>
          Typescript, Javascript, Angular, React, Java, Python, SQL, Node, RXJS, HTML, CSS, SASS, Tailwind, Material, jQuery, Bootstrap, Git, JSON, API REST.
        </Paragraph>
        <Paragraph>
          Also worked with React Native, Spring Boot, Tealium, Adobe Test and Target, Blue Triangle, Freemarker, .NET, @razor, CMS like Wordpress and Hybris, Adobe Experience Manager and Sitecore.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Online
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/CarlosGorrin" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoGithub />}>
                @CarlosGorrin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/carlosgorrin/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoLinkedin />}>
                @carlosgorrin
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
