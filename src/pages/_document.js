import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { appConfig } from '../config'

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
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, minimal-ui, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" />
          <meta name="description" content={appConfig.description} />
          <title>{appConfig.siteName}</title>
          {styleTags}
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet" />
          <link rel="icon" href="/static/favicon.png" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
