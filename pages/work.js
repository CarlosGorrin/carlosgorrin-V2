import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbHomeBanking from '../public/images/work/homebanking_preview.png'
import thumbDpo from '../public/images/work/dpo_preview.png'
import thumbLenovo from '../public/images/work/lenovo_preview.png'
import thumbFord from '../public/images/work/ford_preview.png'
import thumbLincoln from '../public/images/work/lincoln_preview.png'
import thumbKft from '../public/images/work/kft_preview.png'
import thumbDabliu from '../public/images/work/dabliu_preview.png'
import thumbDumau from '../public/images/work/dumau_preview.png'
import thumbSklz from '../public/images/work/sklz_preview.png'
import thumbPippo from '../public/images/work/pippo_preview.png'
import thumbKinema from '../public/images/work/kinema_preview.png'
import thumbCoolRoboten from '../public/images/work/coolroboten_preview.png'

const Work = () => (
  <Layout title="Work">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Work
      </Heading>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading variant="section-title" as="h3" fontSize={20} mb={4}>
          Jobs
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="homebanking" title="HomeBanking" thumbnail={thumbHomeBanking}>
          Digital Platform for Banco Hipotecario (Mortgage Bank)
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="dpo"
            title="DPO Energy"
            thumbnail={thumbDpo}>
            A marketplace for renewable and alternative sources of energy
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="lenovo"
            title="E-Commerce"
            thumbnail={thumbLenovo}>
            Lenovo&apos;s USA & Canada sites
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="ford" thumbnail={thumbFord} title="Ford">
            Desktop and Mobile web app for Ford North America site
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="lincoln" thumbnail={thumbLincoln} title="The Lincoln Motor Company">
            Redesign of Lincoln USA and Canada sites. Desktop and Mobile.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
          Solo and Collabs
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>

      <Section delay={0.3}>
          <WorkGridItem id="sklz" thumbnail={thumbSklz} title="Sklz">
          Training tools and equipment
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="dabliu" thumbnail={thumbDabliu} title="Dabliu">
            Men underwear brand based in Buenos Aires, Argentina. 
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="coolroboten" thumbnail={thumbCoolRoboten} title="Cool Roboten">
          Website makers
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="pippo" thumbnail={thumbPippo} title="Lord Filippo the Conquer">
            A Bull Terrier website
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      
      <Section delay={0.4}>
        <Divider my={6} />
        <Heading variant="section-title" as="h3" fontSize={20} mb={4}>
          Old work
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.3}>
          <WorkGridItem
            id="kft"
            thumbnail={thumbKft}
            title="KFT Fitness">
            Personal trainers that wanted to improve their online presence and so they did
          </WorkGridItem>
      </Section>

      <Section delay={0.3}>
          <WorkGridItem id="dumau" thumbnail={thumbDumau} title="Dumau">
          Ice Cream Shop & Cafe
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="kinema"
            thumbnail={thumbKinema}
            title="Kinema Studio">
            Graphic Design, Web, Photography, Shooting and Editing video.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../components/chakra'
