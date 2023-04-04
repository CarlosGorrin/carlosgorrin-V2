import {
  Container,
  Badge,
  Link,
  List,
  SimpleGrid,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="pichu*Lord Filippo the Conquer">
    <Container>
      <Title>
        Lord Filippo the Conquer <Badge>2016</Badge>
      </Title>
      <P>
        A little fun project I did to showcase my Bull Terrier to the world and catapult him into a famous Stud, an internet sensation or a brand Ambassador for dog food. No exploitation... it was his idea.
      </P>

      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://carlosgorrin.github.io/Lord-Filippo-the-Conquer/">
          Lord-Filippo-the-Conquer <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, Bootstrap</span>
        </ListItem>
      </List>

      <WorkImage src="/images/work/pippo_01.png" alt="pippo" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/work/pippo_02.png" alt="pippo" />
        <WorkImage src="/images/work/pippo_03.png" alt="pippo" />
      </SimpleGrid>
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
