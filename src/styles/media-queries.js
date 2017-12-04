import { generateMedia } from 'styled-media-query'

const mq = generateMedia({
  desktop: '78em',
  tablet: '60em',
  mobile: '46em',
})

export default mq
