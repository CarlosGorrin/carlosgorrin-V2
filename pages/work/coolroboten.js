import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Cool Roboten">
    <Container>
      <Title>
        Cool Roboten <Badge>2016</Badge>
      </Title>
      <P>
        Project focuses on improving web making and providing stylish, responsive web solutions that exceed clients&apos; expectations.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="http://carlosgorrin.github.io/Cool-Roboten-website/">
        Cool-Roboten-website <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, HTML, Scss, Bootstrap</span>
        </ListItem>
      </List>
      <WorkImage src="/images/work/coolroboten_01.png" alt="coolroboten" />
      <WorkImage src="/images/work/coolroboten_02.png" alt="coolroboten" />
      <WorkImage src="/images/work/coolroboten_03.png" alt="coolroboten" />
      <WorkImage src="/images/work/coolroboten_04.png" alt="coolroboten" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
