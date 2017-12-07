import React from 'react'
import styled from 'styled-components'
import mq from '../styles/media-queries'
import { fontSize, colors } from '../styles/variables'

const ContactWrapper = styled.footer`
  margin-top: 6rem;
  margin-bottom: 0.5rem;
  font-size: ${fontSize.small};
  color: ${colors.aquaGray};
  text-align: center;

  ${mq.lessThan('mobile')`
    margin-top: 3rem;
  `}
`

const Footer = () => {
  return (
    <ContactWrapper>
      <p>2017 |  &nbsp;Designed by HsunPei Wang. &nbsp;
        <nobr>Implemented using React.js, Next.js</nobr>
      </p>
    </ContactWrapper>
  )
}

export default Footer
