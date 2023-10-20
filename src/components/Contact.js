import React from 'react'
import styled from 'styled-components'
import mq from '../styles/media-queries'
import GithubIcon from '../static/github.svg'
import LinkedInIcon from '../static/linkedin.svg'
import GmailIcon from '../static/gmail.svg'
import { colors } from '../styles/variables'

const ContactWrapper = styled.div`
  margin-left: 0.15rem;
  padding-bottom: 0.5rem;

  ${mq.lessThan('mobile')`
    margin-left: -0.15rem;
  `}
`

const LinkWrapper = styled.div`
  color: ${colors.aquaGray};
  margin-left: 0.3rem;
  margin-right: 1.35rem;
  display: inline-block;

  ${mq.lessThan('mobile')`
    margin-right: 1.7rem;
  `}

  a {
    color: ${colors.aquaGray};
    transition: color 0.5s ease;
  }

  svg {
    fill: ${colors.aquaGray};
    transition: all 0.5s ease;
  }

  span {
    position: relative;
    padding-left: 0.6rem;
    bottom: 0.25rem;
    ${mq.lessThan('mobile')`
      display: none;
    `}
  }

  &:hover {
    a {
      color: ${colors.mainColor};
    }
    svg {
      fill: ${colors.mainColor};
    }
  }
`

const IconWrapper = styled.div`
  display: inline-block;
  width: 1.5rem;

  ${mq.lessThan('mobile')`
    width: 1.2rem;
  `}
`

const Contact = () => {
  return (
    <ContactWrapper>
      <LinkWrapper>
        <a href="mailto:hsunpei@gmail.com">
          <IconWrapper><GmailIcon /></IconWrapper>
        </a>
      </LinkWrapper>
      <LinkWrapper>
        <a href="https://www.linkedin.com/in/hsun-pei-wang/" target="_blank" rel="noopener noreferrer">
          <IconWrapper><LinkedInIcon /></IconWrapper>
        </a>
      </LinkWrapper>
      <LinkWrapper>
        <a href="https://github.com/hsunpei" target="_blank" rel="noopener noreferrer">
          <IconWrapper><GithubIcon /></IconWrapper>
        </a>
      </LinkWrapper>
    </ContactWrapper>
  )
}

export default Contact
