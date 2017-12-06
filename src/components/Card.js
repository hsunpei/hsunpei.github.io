import styled from 'styled-components'
import mq from '../styles/media-queries'
import { colors, animations, fontSize, fontWeight } from '../styles/variables'

const CardWrapper = styled.div`
  display: inline-block;
  padding: 0.4rem 0.32rem;

  ${mq.lessThan('mobile')`
    padding: 0.5rem 0;
  `}

  ${mq.between('mobile', 'desktop')`
    padding: 0.28rem 0.2rem;
  `}
`

const WhiteCard = styled.div`
  cursor: pointer;
  background-color: ${colors.white};
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 0;
  max-width: 100%;
  width: 19.6rem;
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

  ${mq.between('mobile', 'large')`
    width: 14.7rem;
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
    width: 100%;
    height: auto;
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

const Card = () => {
  return (
    <CardWrapper>
      <WhiteCard>
        <a href="https://www.twreporter.org/a/eng-animal-protection" target="_blank" rel="noopener noreferrer">
          <ImageWrapper>
            <img alt="animal-protection" width="640" height="387" src="/static/thereporter/animal-protection.gif" />
          </ImageWrapper>
          <p>
            <span>No-Kill Policy - The New Paradise for Homeless Animals?</span>
            <OrgTag>The Reporter Taiwan</OrgTag>
            <Date>Nov 2016</Date>
          </p>
        </a>
      </WhiteCard>
    </CardWrapper>
  )
}

export default Card
