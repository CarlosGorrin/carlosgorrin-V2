import {
  Container,
  Badge,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Dumau">
    <Container>
      <Title>
      Dumau. Ice Cream Shop & Cafe <Badge>2012 -2014</Badge>
      </Title>
      <P>
        Unfortunately, I wasn&apos;t paid in ice cream.
      </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            HTML, CSS, Javascript, JQuery
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/work/dumau_01.png" alt="dumau" />
      <WorkImage src="/images/work/dumau_02.png" alt="dumau" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
