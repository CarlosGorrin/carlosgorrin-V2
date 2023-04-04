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
    <Layout title="Lincoln">
      <Container>
        <Title>
          Lincoln <Badge>2016 - 2017</Badge>
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
            <Link href="https://www.lincoln.com/">
            https://www.lincoln.com <ExternalLinkIcon mx="2px" />
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
  
        <WorkImage src="/images/work/lincoln_01.png" alt="lincoln" />
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/work/lincoln_02.png" alt="lincoln" />
          <WorkImage src="/images/work/lincoln_03.png" alt="lincoln" />
        </SimpleGrid>
        <WorkImage src="/images/work/lincoln_05.png" alt="lincoln" />
        <WorkImage src="/images/work/lincoln_04.png" alt="lincoln" />
      </Container>
    </Layout>
)
  
export default Work
export { getServerSideProps } from '../../components/chakra'
  