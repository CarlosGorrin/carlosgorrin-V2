import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Lenovo">
    <Container>
      <Title>
        Lenovo <Badge>2017 - 2019</Badge>
      </Title>
      <P>
        USA & Canada E-Commerce
      </P>
      <P>
      Created new product pages and templates. Improved site performance, implemented third party widgets, tag management,  A/B Testing and responsive Design
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.lenovo.com/us/en/">
          https://www.lenovo.com/us/en/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, HTML, CSS, Hybris, Tealium, Blue Triangle, Adobe Test & Target</span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/work/lenovo_01.png"
        alt="lenovo"
      />
      <WorkImage src="/images/work/lenovo_02.png" alt="lenovo" />
      <WorkImage src="/images/work/lenovo_03.png" alt="lenovo" />
      <WorkImage src="/images/work/lenovo_04.png" alt="lenovo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
