const DemoText = ({ title, description }) => 
<div className="demo-text">
  <h3>{title}</h3>
  {
    description.map((block, index) => <p key={index} >{block}</p>)
  } 
</div>

const DemoImage = ({ image }) => 
<div className="demo-image">
  { image && <img src={image} style={{ width: "100%" }} /> }
</div>

const Section = ({title, description, image, index }) => 
<div className="demo-container" style={{ textAlign: "left", }}>
  <style>{`

    .demo-text {
      
    }
    .demo-image {
      margin: auto;
      object-fit: contain;
    }
    @media only screen and (max-width: 974px) {
      .demo-image {
        padding: 0 40px;
      }
      .demo-container {
        margin-bottom: 80px;
      }
    }
    @media only screen and (min-width: 974px) {
      .demo-image {
        flex: 1;
        padding-right: 40px;
      }
      .demo-text {
        flex: 1;
      }
      .demo-container {
        display: flex;
        margin-bottom: 40px;
      }
    }
  `}</style>
  <DemoImage image={image} />
  <DemoText title={title} description={description} />
</div>

const Demonstration = ({ title, content }) =>
<div className="section" style={{background: "#fefefe"}}>
  <style>{`
    @media only screen and (max-width: 974px) {
      .demo-content-container {
        max-width: 480px;
        margin: auto;
      }
      .demo-title-container {
        text-align: left;
        max-width: 480px;
      }
    }
    @media only screen and (min-width: 974px) {
      .demo-content-container {
        max-width: 720px;
        margin: auto;
      }
      .demo-title-container {
        text-align: left;
        max-width: 720px;
      }
    }
  `}</style>
  <div className={"section-container"}>
    <div className="title-container demo-title-container">
      <h2>{title}</h2>
    </div>
    <div className="demo-content-container">
      { content.map((section, index) => <Section key={index} title={section.title} index={index} description={section.description} image={section.image}/>) }
    </div>
  </div>
</div>

export default Demonstration