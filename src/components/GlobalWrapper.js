import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import { colors } from '../styles/variables'

const GlobalWrapper = () => injectGlobal`
  ${styledNormalize}

  body {
    background-color: ${colors.lightGray};
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 0;
    line-height: 1.65;
  }

  a {
    color: ${colors.mainColor};
    text-decoration: none;
  }

  h1 {
    font-weight: 600;
  }
`

export default GlobalWrapper
