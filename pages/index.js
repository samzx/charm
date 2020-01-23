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
    background: ${config.style.backgroundColor};
    margin: 0;
    font-family: -apple-system,system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
    color: ${config.style.textColor};
  }
  a {
    color: ${config.style.accentColor};
    text-decoration: none;
  }
  p {
    font-size: 16px;
    line-height: 24px;
  }
  .title-container {
    max-width: 720px;
    margin: auto;
  }
  .section {
    display: flex;
    min-width: 375px;
  }
  .section-container {
    width: 1280px;
    margin: 0 auto;
    text-align: center;
    padding: 0 10px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 974px) {
    h1 {
      font-size: 28px;
    }
    h2 {
      font-size: 42px;
    }
    h3 {
      font-size: 32px;
    }
  }
  @media only screen and (min-width: 974px) {
    h1 {
      font-size: 28px;
    }
    h2 {
      font-size: 48px;
    }
    h3 {
      font-size: 32px;
    }
    .section-container {
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }
`}</style>

const Index = () => (
  <div className="app">
    <Head>
      <title>{config.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href={config.favicon || "/favicon.ico"} />
      <link rel="apple-touch-icon" href={config.appIcon} />
      <meta property="og:title"              content={config.title} />
      <meta property="og:description"        content={config.hero.title} />
      <meta property="og:image"              content={config.appIcon} />
    </Head>
    <AppStyle/>
    { config.googleAnalyticsId && <GoogleAnalytics id={config.googleAnalyticsId}/>  }
    <div>
      <Header name={config.appName} icon={config.appIcon} />
      <Hero isMobile={config.isMobile} {...config.hero} Action={config.action} actionColor={config.style.actionColor} />
      { config.demonstration.content && <Demonstration {...config.demonstration} /> }
      { config.features && config.features.content &&  <Features {...config.features} /> }
      { config.exit.appear  && <Exit {...config.exit} Action={config.action} /> }
      <Footer {...config.footer} />
    </div>
  </div>
);

export default Index;
