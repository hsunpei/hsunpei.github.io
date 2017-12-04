import Markdown from 'react-remarkable'
import React from 'react'
import styled from 'styled-components'
import SelfIntro from '../text/self-intro'
import { colors } from '../styles/variables'
import mq from '../styles/media-queries'
import GlobalWrapper from '../components/GlobalWrapper'

const Title = styled.h1`
  color: ${colors.darkText};
  font-size: 50px;
`

const Container = styled.div`
  max-width: 62rem;
  margin-right: auto;
  margin-left: auto;
  padding: 2rem;

  ${mq.lessThan('tablet')`
    padding: 1rem;
  `}
`

class Home extends React.Component {
  render() {
    GlobalWrapper()
    return (
      <Container>
        <Title>My page</Title>
        {/* Pass Markdown source to the `source` prop */}
        <Markdown source="**Markdown is awesome!**" />

        {/* Or pass it as children */}
        {/* You can nest React components, too */}
        <Markdown source={SelfIntro} options={{ linkTarget: '_blank' }} />
      </Container>
    )
  }
}


export default Home
