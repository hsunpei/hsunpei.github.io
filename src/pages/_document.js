import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))

    const styleTags = (
      <style
        dangerouslySetInnerHTML={{
          __html: sheet.getStyleElement().reduce(
            (
              css,
              {
                props: {
                  dangerouslySetInnerHTML: {
                    __html = '',
                  } = {},
                } = {},
              } = {},
            ) => (
              `${css}${__html}`
            ),
            '',
          ),
        }}
      />
    )

    return { ...page, styleTags }
  }

  render() {
    const {
      styleTags,
    } = this.props

    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, minimal-ui, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" />
          <title>My page</title>
          {styleTags}
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,600" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
