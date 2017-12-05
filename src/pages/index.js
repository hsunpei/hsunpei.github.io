import Markdown from 'react-remarkable'
import React from 'react'
import styled from 'styled-components'
import SelfIntro from '../text/self-intro'
import { colors, animations, fontSize, fontWeight } from '../styles/variables'
import mq from '../styles/media-queries'
import GlobalWrapper from '../components/GlobalWrapper'

const Container = styled.div`
  max-width: 62rem;
  margin-right: auto;
  margin-left: auto;
  padding: 2rem;

  ${mq.lessThan('tablet')`
    padding: 1rem;
  `}
`

const Title = styled.h1`
  color: ${colors.darkText};
  font-size: 50px;
`

const IntroBox = styled.div`
  max-width: 40rem;
`

const WorkWrapper = styled.div`
  width: 100%;
`

const Card = styled.div`
  cursor: pointer;
  background-color: ${colors.white};
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 0;
  max-width: 100%;
  width: 20rem;
  margin: 0;
  overflow: hidden;
  line-height: 1.5;
  font-weight: ${fontWeight.bold};
  padding-bottom: 0.3rem;
  ${animations.moveUp}

  ${mq.lessThan('mobile')`
    width: 100%;
    padding: 0;
  `}

  p {
    margin: 0.55rem;

    ${mq.lessThan('mobile')`
      margin: 0.8rem;
    `}
  }

  a {
    color: ${colors.darkText};
    transition: color 0.8s ease;

    &:hover {
      color: ${colors.mainColor};
    }
  }
`

const ImageWrapper = styled.div`
  width: 100%;

  img {
    max-width: 100%;
  }
`

const OrgTag = styled.span`
  padding-left: 0.5rem;
  color: ${colors.aquaGray};
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.normal};
`

const Date = styled.span`
  color: ${colors.aquaGray};
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.normal};
  &::before {
    content: ', ';
  }
`

class Home extends React.Component {
  render() {
    GlobalWrapper()
    return (
      <Container>
        <IntroBox>
          <Title>My page</Title>
          {/* Pass Markdown source to the `source` prop */}
          <Markdown source="**Markdown is awesome!**" />

          {/* Or pass it as children */}
          {/* You can nest React components, too */}
          <Markdown source={SelfIntro} options={{ linkTarget: '_blank' }} />
        </IntroBox>
        <WorkWrapper>
          <Card>
            <a href="https://www.twreporter.org/a/eng-animal-protection" target="_blank" rel="noopener noreferrer">
              <ImageWrapper>
                <img alt="animal-protection" src="/static/thereporter/animal-protection.gif" />
              </ImageWrapper>
              <p>
                <span>No-Kill Policy - The New Paradise for Homeless Animals?</span>
                <OrgTag>The Reporter Taiwan</OrgTag>
                <Date>Nov 2016</Date>
              </p>
            </a>
          </Card>
        </WorkWrapper>
      </Container>
    )
  }
}


export default Home
