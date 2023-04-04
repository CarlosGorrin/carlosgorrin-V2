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
  <Layout title="Kinema Studio">
    <Container>
      <Title>
        Kinema Studio <Badge>2012-2014</Badge>
      </Title>
      <P>A creative collective that was born from the idea of combining the areas of expertise and interests of each member, to have fun while working on mixed media projects.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JQuery</span>
        </ListItem>
      </List>
      <WorkImage src="/images/work/kinema_01.png" alt="kinema" />
      <WorkImage src="/images/work/kinema_02.png" alt="kinema" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
