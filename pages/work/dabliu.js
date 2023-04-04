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
  <Layout title="Dabliu">
    <Container>
      <Title>
        Dabliu <Badge>2016</Badge>
      </Title>
      <P>Men underwear brand based in Buenos Aires, Argentina.</P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://carlosgorrin.github.io/Dabliu/">
          Dabliu <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, Sass, Javascript, Bootstrap</span>
        </ListItem>
      </List>

      <WorkImage src="/images/work/dabliu_01.png" alt="dabliu" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/work/dabliu_03.png" alt="dabliu" />
        <WorkImage src="/images/work/dabliu_04.png" alt="dabliu" />
      </SimpleGrid>
      <WorkImage src="/images/work/dabliu_02.png" alt="dabliu" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
