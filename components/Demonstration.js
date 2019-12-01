const Section = ({title, description, image}) => 
<div style={{margin: "50px 0", textAlign: "left"}}>
  <h3>{title}</h3>
  {
    description.map((block, index) => <p key={index} >{block}</p>)
  }
  { image && <img src={image} style={{width: "100%"}} /> }
  {/* <div style={{ height: 300, width: "100%", background: image, backgroundSize: "cover"}}></div> */}
</div>

const Demonstration = ({ title, content }) =>
<div className="section" style={{background: "white"}}>
  <div className={"section-container"}>
    <div className="title-container" style={{ textAlign: "left", maxWidth: 720 }}>
      <h2>{title}</h2>
    </div>
    <div style={{maxWidth: 720, margin: "auto"}}>
      { content.map((section, index) => <Section key={index} title={section.title} description={section.description} image={section.image}/>) }
    </div>
  </div>
</div>

export default Demonstration