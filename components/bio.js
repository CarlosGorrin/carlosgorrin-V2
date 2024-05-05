import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 1em;
  line-height: 1.6em;
  position: relative;
  padding-bottom: 0.5em;

  &::before {
    content: "-";
    position: absolute;
    left: 0;
    top: 0;
  }
`