import MailerLite from "../../components/extras/MailerLite"
import config from "../appConfig"

const ConfiguredMailerLite = () => {
    // Configurations
  const id = '1629750' // get this from the form url
  const dataCode = 'a4n6k1' // get this from the share link

  const title = ''
  const subtitle = "Coming Soon to iOS"
  const description = "No spam - get one email only when we release"
  const successTitle = 'Thank you 🤗'
  const successSubtitle = "We're working hard to bring this to you soon"
  const buttonText = 'Subscribe'
  const buttonLoadingText = 'Subscribing'
  const buttonBackgroundColor = config.style.primaryColor
  const buttonTextColor = config.style.accentColor
  const actionColor = config.style.actionColor

  const content = { title, subtitle, description, successTitle, successSubtitle, buttonText, buttonLoadingText, buttonBackgroundColor, buttonTextColor, actionColor }

  return <MailerLite id={id} dataCode={dataCode} content={content} />
}

export default ConfiguredMailerLite
