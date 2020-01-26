import AppStore from "./extras/AppStore"
import MailerLiteConfig from "./extras/MailerLiteConfig"

const config = {
  title: "App Name - Light description",
  favicon: "https://res.cloudinary.com/xielabs/image/upload/v1580032618/charm-icon.png",
  appName: "App Name",
  appIcon: "https://res.cloudinary.com/xielabs/image/upload/v1580032618/charm-icon.png",
  isMobile: true,
  action: MailerLiteConfig,
  style: {
    backgroundColor: "#fbf4f0",
    textColor: "#0f0f0f",
    primaryColor: "#0f0f0f",
    accentColor: "#fff",
    actionColor: "#0092ff"
  },
  hero: {
    title: "Tell us why your customers need you.",
    image: "https://res.cloudinary.com/xielabs/image/upload/v1576249323/demo-2x.png",
    mobileHeroImageConfig: {
      jumpHeight: "125"
    }
  },
  demonstration: {
    title: "Show us how you'll deliver value.",
    content: [
      {
        title: "Do this first.",
        description: [
          "Your goal is to let the user understand the value of your product.",
          "You can start off with the first steps of the user journey."
        ],
        image: "https://pro-cdn.pixelmator.com/pro/experience/1.2/img-experience@2x.jpg"
      },
      {
        title: "Then this second.",
        description: [
          "Keep going with the journey while selling your product strengths. Use your customers vocabulary to they understand."
        ],
        image: "https://pixelmator-pro.s3.amazonaws.com/pro/layouting/1.3.4/img_layouting@2x.jpg"
      },
      {
        title: "Isn't that amazing?",
        description:[
          "This is your last chance. Finish off the journey with a bang!",
          "Amuse them."
        ],
        image: "https://pro-cdn.pixelmator.com/pro/color-adjustments/1.4/img-color-adjustments@2x.jpg"
      }
    ]
  },
  features: {
    title: "List out what your app can do.",
    content: [
      {
        title: "First Killer Feature",
        description: "Explain this killer feature in more detail here. Add some great copy!",
        image: "http://pixelmator-pro.s3.amazonaws.com/pro/homepage/1.5/whats-new/ico_performance.png"
      },
      {
        title: "The Killer Feature",
        description: "Explain this killer feature in more detail here. Use customer vocabulary.",
        image: "http://pixelmator-pro.s3.amazonaws.com/pro/homepage/1.5/whats-new/ico_ml-denoise.png"
      },
      {
        title: "Last Killer Feature",
        description: "Explain this killer feature in more detail here. Solve their pain points",
        image: "http://pixelmator-pro.s3.amazonaws.com/pro/homepage/1.5/whats-new/ico_mac-pro.png"
      }
    ]
  },
  exit: {
    title: "Don't miss out.",
    appear: true
  },
  footer: {
    links: [
      {
        name: "Twitter",
        href: "https://twitter.com/samxstudio"
      },
      {
        name: "Contact",
        href: "mailto:contact@samxie.net"
      }
    ]
  },
  googleAnalyticsId: null
}

export default config
