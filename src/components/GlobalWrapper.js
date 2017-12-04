import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import { colors } from '../styles/variables'

const GlobalWrapper = () => injectGlobal`
  ${styledNormalize}

  body {
    background-color: ${colors.lightGray};
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    line-height: 1.65;
  }

  a {
    color: ${colors.mainColor};
    text-decoration: none;
  }
`

export default GlobalWrapper
