import Markdown from 'react-remarkable'
import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-component'
import SelfIntro from '../text/self-intro'
import { workList } from '../text/list-of-work'
import Card from '../components/Card'
import { colors } from '../styles/variables'
import mq from '../styles/media-queries'
import GlobalWrapper from '../components/GlobalWrapper'
import { map } from 'lodash'

const _ = {
  map,
}

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

const masonryOptions = {
  transitionDuration: 0.5,
}

class Home extends React.Component {
  render() {
    const WorkList = _.map(workList, (work) => {
      return (<Card key={work.alt} {...work} />)
    })

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
          <Masonry options={masonryOptions}>
            {WorkList}
          </Masonry>
        </WorkWrapper>
      </Container>
    )
  }
}


export default Home
