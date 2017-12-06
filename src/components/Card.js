import styled from 'styled-components'
import PropTypes from 'prop-types'
import mq from '../styles/media-queries'
import { getDateString } from '../utils/date'
import { colors, animations, fontSize, fontWeight } from '../styles/variables'

const CardWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 0.4rem 0.32rem;

  ${mq.lessThan('mobile')`
    padding: 0.5rem 0;
  `}

  ${mq.between('mobile', 'tablet')`
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
  width: 19.3rem;
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

  ${mq.between('mobile', 'tablet')`
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

const Card = (props) => {
  const { imgSize } = props
  return (
    <CardWrapper>
      <WhiteCard>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <ImageWrapper>
            <img alt={props.alt} width={imgSize.width} height={imgSize.height} src={props.image} />
          </ImageWrapper>
          <p>
            <span>{props.title}</span>
            <OrgTag>{props.organization}</OrgTag>
            <Date>{getDateString(props.month, props.year)}</Date>
          </p>
        </a>
      </WhiteCard>
    </CardWrapper>
  )
}


Card.defaultProps = {
  link: false,
  alt: null,
  imgSize: {
    width: 500,
    height: 500,
  },
  image: 0,
  title: 0,
  organization: 0,
  month: 1,
  year: 2017,
}

Card.propTypes = {
  link: PropTypes.string,
  alt: PropTypes.string,
  imgSize: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  organization: PropTypes.string,
  month: PropTypes.number,
  year: PropTypes.number,
}

export default Card
