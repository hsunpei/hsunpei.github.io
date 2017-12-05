import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import { colors, fontWeight } from '../styles/variables'

const GlobalWrapper = () => injectGlobal`
  ${styledNormalize}

  body {
    background-color: ${colors.lightGray};
    font-family: 'Roboto', sans-serif;
    font-weight: ${fontWeight.normal};
    margin: 0;
    line-height: 1.65;
  }

  p {
    ::selection {
      background: ${colors.mainColor};
    }
  }

  a {
    color: ${colors.mainColor};
    text-decoration: none;
  }

  h1 {
    font-weight: ${fontWeight.bold};
  }
`

export default GlobalWrapper
