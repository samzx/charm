import Head from 'next/head'

import Hero from '../components/Hero'
import Header from '../components/Header'
import Demonstration from '../components/Demonstration'
import Features from '../components/Features'
import Exit from '../components/Exit'
import Footer from '../components/Footer'

import GoogleAnalytics from  '../components/extras/GoogleAnalytics'

import config from '../config/appConfig'

const AppStyle = () =>
<style jsx="true">{`
  body {
    background: #fbf4f0;
    margin: 0;
    font-family: -apple-system,system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
  }
  a {
    color: #fbf4f0;
    text-decoration: none;
  }
  p {
    font-size: 16px;
    line-height: 24px;
  }

  .title-container {
    max-width: 600px;
    margin: auto;
  }
  .section {
    display: flex;
  }
  .section-container {
    width: 1280px;
    margin: 0 auto;
    text-align: center;
    padding: 0 10px;
  }

  @media only screen and (max-width: 974px) {
    h1 {
      font-size: 28px;
    }
    h2 {
      font-size: 48px;
    }
    h3 {
      font-size: 24px;
    }
  }
  @media only screen and (min-width: 974px) {
    h1 {
      font-size: 28px;
    }
    h2 {
      font-size: 62px;
    }
    h3 {
      font-size: 32px;
    }
  }
`}</style>

const Index = () => (
  <div className="app">
    <Head>
      <title>{config.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href={config.favicon || "/favicon.ico"} />
    </Head>
    <AppStyle/>
    { config.googleAnalyticsId && <GoogleAnalytics id={config.googleAnalyticsId}/>  }
    <div>
      <Header name={config.appName} />
      <Hero isMobile={config.isMobile} {...config.hero} Action={config.action} />
      <Demonstration {...config.demonstration} />
      <Features {...config.features} />
      <Exit {...config.exit} Action={config.action} />
      <Footer {...config.footer} />
    </div>
  </div>
);

export default Index;
