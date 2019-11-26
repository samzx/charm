import MailerLite from "../../components/extras/MailerLite"

const ConfiguredMailerLite = () => {
    // Configurations
  const id = '1629750' // get this from the form url
  const dataCode = 'a4n6k1' // get this from the share link

  const title = ''
  const subtitle = "Sign up to join the early access wait list."
  const successTitle = 'Thank you!'
  const successSubtitle = "We're working hard to bring this to you soon."
  const buttonText = 'Subscribe'
  const buttonLoadingText = 'Subscribing'

  const content = { title, subtitle, successTitle, successSubtitle, buttonText, buttonLoadingText }

  return <MailerLite id={id} dataCode={dataCode} content={content} />
}

export default ConfiguredMailerLite
