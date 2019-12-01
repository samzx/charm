import MailerLite from "./extras/MailerLiteConfig"

const config = {
  title: "Pocket Panda",
  favicon: "https://res.cloudinary.com/xielabs/image/upload/v1576245653/pocketpanda.png",
  appName: "Pocket Panda",
  appIcon: "https://res.cloudinary.com/xielabs/image/upload/v1576245653/pocketpanda.png",
  isMobile: true,
  action: MailerLite,
  style: {
    backgroundColor: "#fbf4f0",
    textColor: "#0f0f0f",
    primaryColor: "#0f0f0f",
    accentColor: "#fff",
    actionColor: "#0092ff"
  },
  hero: {
    title: "Curate your board game collection",
    image: "https://res.cloudinary.com/xielabs/image/upload/v1576249323/demo-2x.png",
    mobileHeroImageConfig: {
      jumpHeight: "120"
    }
  },
  demonstration: {
    title: "Don't horde - make the perfect collection",
    content: [
      {
        title: "Track your game history",
        description: [
          "Input your board game collection. Games you've owned, you've played and the ones you wish you had.",
          "Play some games then rate it. Input your rankings, and your friends'."
        ],
        image: "https://res.cloudinary.com/xielabs/image/upload/v1576160022/undraw_percentages_0rur.png"
      },
      {
        title: "Discover new board games",
        description:[
          "Based on everyone's ratings, our algorithm will recommend you new games to try.",
          "We'll only recommend games we're confident you'll love."
        ],
        image: "https://res.cloudinary.com/xielabs/image/upload/v1576160050/undraw_treasure_of9i.png"
      },
      {
        title: "Minimise your collection",
        description: [
          "We'll detect games that have been sitting on your shelf for a while. Maybe it's time to give it a new life - to someone else.",
        ],
        image: "https://res.cloudinary.com/xielabs/image/upload/v1576160068/undraw_throw_down_ub2l.png"
      },
    ]
  },
  features: {
    title: "You'll get all the tools to get started today",
    content: [
      {
        title: "Syncs with Board Game Geek",
        description: "Import your plays and lists from Board Game Geek. It's that simple to start!",
        image: "https://res.cloudinary.com/xielabs/image/upload/v1576248844/sync.png"
      },
      {
        title: "Personalised recommendations",
        description: "We've trained our model on the largest database of reviews to deliver the best recommendations.",
        image: "https://res.cloudinary.com/xielabs/image/upload/v1576248946/recommended.png"
      },
      {
        title: "Extensive board game library",
        description: "We've populated the gaming library from Board Game Geek, so you know you'll have all the latest board games.",
        image: "https://res.cloudinary.com/xielabs/image/upload/v1576249404/collection.png"
      }
    ]
  },
  exit: {
    title: "Sign up for early access",
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
