import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/variables'
import mq from '../styles/media-queries'
import Markdown from 'react-remarkable'

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

const test = `
## Reasons React is great

  1. Server-side rendering
  2. This totally works:

See my [About](/about/) page for details.
Pretty neat!
`

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Title>My page</Title>
        {/* Pass Markdown source to the `source` prop */}
        <Markdown source="**Markdown is awesome!**" />

        {/* Or pass it as children */}
        {/* You can nest React components, too */}
        <Markdown source={test} options={{ linkTarget: '_blank' }} />
      </Container>
    )
  }
}

export default Home
