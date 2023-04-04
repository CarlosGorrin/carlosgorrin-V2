import {
  Container,
  Badge,
  List,
  Link,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="dpo energy">
    <Container>
      <Title>
        DPO Project <Badge>2019-2020</Badge>
      </Title>
      <P>
        Marketplace for Renewable energy
      </P>
      <P>
        Creating the Web App&apos;s  Components, Services and modules from scratch.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://dpoenergy.com/">
          https://dpoenergy.com/ <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/work/dpo_01.png" alt="dpo" />
      <WorkImage src="/images/work/dpo_02.png" alt="dpo" />
      <WorkImage src="/images/work/dpo_03.png" alt="dpo" />
      <WorkImage src="/images/work/dpo_04.png" alt="dpo" />
      <WorkImage src="/images/work/dpo_05.png" alt="dpo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
