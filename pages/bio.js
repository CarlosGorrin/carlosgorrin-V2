import { Container, Heading, Link, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Bio = () => (
  <Layout title="Bio">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      Bio
      </Heading>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" variant="section-title">
          Timeline
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born in Caracas, Venezuela.
        </BioSection>
        <BioSection>
          <BioYear>2005</BioYear>
          Started doing graphic and editorial design work.
        </BioSection>
        <BioSection>
          <BioYear>2007</BioYear>
          Completed a Bachelor&apos;s Degree in Graphic Design and Business Administration.
        </BioSection>
        <BioSection>
          <BioYear>2009</BioYear>
          Moved to Buenos Aires, Argentina to attend Film School.
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          Created a creative collective named Kinema Studio, centering  my attention on Graphic Design, Web, Photography, Shooting and Editing video.
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Started Cool Roboten, focusing  in making custom websites for a wide variety of clients.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Worked at Wunderman, with primary accounts in the USA and Canada, developing sites for Ford and Lincoln automobile manufacturers.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Worked at Lenovo&apos;s USA & Canada E-commerce.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Worked at Asap, focusing in the DPO Project, a marketplace for natural resources.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Google Cybersecurity Professional Certificate
        </BioSection>
        <BioSection>
          <BioYear>2020 - present</BioYear>
          Working at Boreal IT. Developing the Homebanking for the client Banco Hipotecario.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interest
        </Heading>
        <Paragraph>Tech, Cybersecurity,{' '}
        <Link href="https://www.flickr.com/photos/cgorrin/albums" target="_blank">
             Photography
          </Link>
          , Film, Music, Art,{' '}
          <Link href="https://www.deviantart.com/usingtheforce/gallery" target="_blank">
           Graphic Design
          </Link>
          , Tattoos, Watches, MMA, Formula 1
        </Paragraph>
      </Section>
      
    </Container>
  </Layout>
)

export default Bio
export { getServerSideProps } from '../components/chakra'
