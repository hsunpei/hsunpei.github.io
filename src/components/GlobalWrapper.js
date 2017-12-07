import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import { colors, fontWeight } from '../styles/variables'

const GlobalWrapper = () => injectGlobal`
  ${styledNormalize}

  body {
    background: linear-gradient(to bottom, rgba(253,254,254,1) 0%, rgba(246,247,245,1) 100%);
    font-family: 'Roboto', helvetica, 'PingFang TC', 'Noto Sans TC', 'Microsoft JhengHei', sans-serif;
    font-weight: ${fontWeight.normal};
    margin: 0;
    line-height: 1.65;
  }

  p, h1, h2, span, nobr {
    ::selection {
      background: ${colors.lightGreen};
    }
  }

  a {
    color: ${colors.mainColor};
    text-decoration: none;
  }

  h1 {
    font-weight: ${fontWeight.normal};
  }
`

export default GlobalWrapper
