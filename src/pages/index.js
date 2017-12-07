import Markdown from 'react-remarkable'
import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-component'
import SelfIntro from '../text/self-intro'
import { workList, volunteerList } from '../text/list-of-work'
import Card from '../components/Card'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { colors, fontSize, fontWeight } from '../styles/variables'
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
  font-size: ${fontSize.superLarge};

  ${mq.lessThan('mobile')`
    font-size: ${fontSize.large};
  `}
`

const Subtitle = styled.h2`
  position: relative;
  color: ${colors.mainColor};
  font-size: ${fontSize.xMedium};
  font-weight: ${fontWeight.normal};
  margin-top: 3.5rem;
  margin-bottom: 1rem;

  ${mq.lessThan('mobile')`
    font-size: ${fontSize.medium};
  `}

  &:after {
    content: " /";
    opacity: 0.6;
    font-size: ${fontSize.normalPlus};
    width: 1.3rem;
    height: 100%;
    color: ${colors.aquaGray};
    top: -0.6rem;
  }
`

const IntroBox = styled.div`
  max-width: 40rem;
  margin-left: 0.3rem;
  margin-bottom: 3rem;

  ${mq.lessThan('mobile')`
    margin-left: 0;
  `}
`

const WorkWrapper = styled.div`
  width: 100%;
`

const masonryOptions = {
  transitionDuration: 0.5,
  // horizontalOrder: true,
}

const getCards = (list) => {
  return _.map(list, (work) => {
    return (<Card key={work.alt} {...work} />)
  })
}

class Home extends React.Component {
  render() {
    const WorkList = getCards(workList)
    const VolunteerList = getCards(volunteerList)

    GlobalWrapper()
    return (
      <Container>
        <div itemScope itemType="http://schema.org/Person">
          <Title><span itemProp="name">HsunPei Wang</span> <nobr>(王珣沛)</nobr></Title>
          <Contact />
          <IntroBox itemProp="description">
            <Markdown source={SelfIntro} options={{ linkTarget: '_blank' }} />
          </IntroBox>
        </div>
        <WorkWrapper>
          <Subtitle>List of Works</Subtitle>
          <Masonry options={masonryOptions}>
            {WorkList}
          </Masonry>
        </WorkWrapper>
        <WorkWrapper>
          <Subtitle>Volunteer Projects</Subtitle>
          <Masonry options={masonryOptions}>
            {VolunteerList}
          </Masonry>
        </WorkWrapper>
        <Footer />
      </Container>
    )
  }
}


export default Home
