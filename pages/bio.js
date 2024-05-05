import { Container, Heading, Link, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection } from '../components/bio'

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
          Born in Caracas, Venezuela.
        </BioSection>
        <BioSection>
          Began my career doing graphic and editorial design work.
        </BioSection>
        <BioSection>
          Completed a Bachelor&apos;s Degree in Graphic Design and Business Administration.
        </BioSection>
        <BioSection>
          Moved to Buenos Aires, Argentina to attend Film School.
        </BioSection>
        <BioSection>
          Founded Kinema Studio, focusing on Graphic Design, Web, Photography, Shooting, and Editing video.
        </BioSection>
        <BioSection>
          Started Cool Roboten, specializing in creating custom websites for a diverse clientele.
        </BioSection>
        <BioSection>
          Joined Wunderman to develop sites for Ford and Lincoln in the USA and Canada.
        </BioSection>
        <BioSection>
          Contributed to Lenovo&apos;s USA & Canada E-commerce operations.
        </BioSection>
        <BioSection>
          Engaged in the DPO Project at Asap, a marketplace for natural resources.
        </BioSection>
        <BioSection>
          Earned the Google Cybersecurity Professional Certificate.
        </BioSection>
        <BioSection>
          Currently at Banco Hipotecario (Mortgage Bank), leading and mentoring teams on various projects and features for Homebanking, with a focus on personal investments.
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
