import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Ford">
    <Container>
      <Title>
        Ford <Badge>2016 - 2017</Badge>
      </Title>
      <P>
        Automotive Industry
      </P>
      <P>
        Desktop and Mobile web app
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.ford.com/">
          https://www.ford.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, CSS3, XML, Freemarker, Aem, Java</span>
        </ListItem>
      </List>

      <WorkImage src="/images/work/ford_01.png" alt="ford" />
      <WorkImage src="/images/work/ford_02.png" alt="ford" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/work/ford_03.png" alt="ford" />
        <WorkImage src="/images/work/ford_04.png" alt="ford" />
      </SimpleGrid>
      <WorkImage src="/images/work/ford_05.png" alt="ford" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
