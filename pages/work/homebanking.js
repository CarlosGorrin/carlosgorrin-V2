import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="HomeBanking">
    <Container>
      <Title>
        HomeBanking Hipotecario Bank <Badge>2020 - Present</Badge>
      </Title>
      <P>
	    Planning, building new features, improving code and hot fixing
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://hb.hipotecario.com.ar/hb/">
          https://hb.hipotecario.com.ar <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Angular, Typescript, Javascript, Rxjs, Html, Css, Scss, Materials, API Rest, Bootstrap, Spring Boot</span>
        </ListItem>
      </List>

      <WorkImage src="/images/work/homebanking_01.png" alt="homebanking" />
      <WorkImage src="/images/work/homebanking_06.png" alt="homebanking" />
      <WorkImage src="/images/work/homebanking_04.png" alt="homebanking" />
      <WorkImage src="/images/work/homebanking_07.png" alt="homebanking" />
      <WorkImage src="/images/work/homebanking_02.png" alt="homebanking" />
      <WorkImage src="/images/work/homebanking_03.png" alt="homebanking" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
