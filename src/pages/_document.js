import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { appConfig } from '../config'
import { colors } from '../styles/variables'

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

    const ogImgUrl = `${appConfig.url}/static/home_og_img.jpg`

    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, minimal-ui, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" />
          <link rel="canonical" href={appConfig.url} />
          <meta name="description" content={appConfig.description} />
          <meta name="theme-color" content={colors.mainColor} />
          <meta property="og:title" content={appConfig.title} />
          <meta property="og:description" content={appConfig.description} />
          <meta property="og:image" content={ogImgUrl} />
          <meta name="twitter:title" content={appConfig.title} />
          <meta name="twitter:description" content={appConfig.description} />
          <meta name="twitter:image" content={ogImgUrl} />
          <title>{appConfig.siteName}</title>
          {styleTags}
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet" />
          <link rel="icon" href="/static/favicon.png" type="image/x-icon" />
          <script
            dangerouslySetInnerHTML={{ __html: '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o), m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\'); ga(\'create\', \'UA-110876464-1\', \'auto\'); ga(\'send\', \'pageview\');' }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
