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
  <Layout title="KFT Evolution">
    <Container>
      <Title>
      KFT Evolution <Badge>2015</Badge>
      </Title>
      <P>
      A group of personal trainers wanted to improve their online presence by creating a website that includes testimonials, photos, and a brief description of their methods, locations, and services.
      </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            HTML, CSS, SCSS, Javascript, JQuery, Skeleton
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/work/kft_01.png" alt="kft" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
