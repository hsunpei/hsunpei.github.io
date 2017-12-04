import Markdown from 'react-remarkable'
import React from 'react'
import styled from 'styled-components'
import SelfIntro from '../text/self-intro'
import { colors, animations } from '../styles/variables'
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
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .15);
  border-radius: 3px;
  padding: 1rem;
  max-width: 100%;
  width: 12.5rem;
  margin: 0;
  ${animations.moveUp}

  ${mq.lessThan('mobile')`
    width: 100%;
    padding: 0;
  `}

  p {
    margin: 0.5rem;
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
            <p>No-Kill Policy - The New Paradise for Homeless Animals?</p>
          </Card>
        </WorkWrapper>
      </Container>
    )
  }
}


export default Home
