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
  <Layout title="SKLZ">
    <Container>
      <Title>
        SKLZ <Badge>2019</Badge>
      </Title>
      <P>
      E-commerce dedicated to training and drills equipment for different sports.
	    Part of the Implus Footcare brands
      </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sklz.com/">
          https://sklz.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, SCSS, Javascript, JQuery, Bootstrap, Webpack, Sitecore, .Net</span>
        </ListItem>
      </List>

      <WorkImage src="/images/work/sklz_02.png" alt="sklz" />
      <WorkImage src="/images/work/sklz_03.png" alt="sklz" />
      <WorkImage src="/images/work/sklz_04.png" alt="sklz" />
      <WorkImage src="/images/work/sklz_05.png" alt="sklz" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
