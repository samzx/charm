const Feature = ({title, description, image}) =>
<div className={"feature-container"}  style={{ flex: 1, marginTop: 0, maxWidth: 280 }}>
  <style>{`
    @media only screen and (max-width: 974px) {
      .feature-container {
        margin: 48px 0px;
      }
    }
    @media only screen and (min-width: 974px) {
      .feature-container {
        margin: 72px;
      }
    }
  `}</style>
  { image &&
    <div style={{height: 72, width: 72, background: `url(${image})`, backgroundSize: "cover", margin: "auto", borderRadius: 10 }}></div>
  }
  <h3>{title}</h3>
  <p>{description}</p>
</div>

const Features = ({ title, content }) =>
<div className="section" style={{ background: "#0f0f0f", color: "#fefefe" }}>
  <div className="section-container">
    <div className="title-container">
      <h2>{title}</h2>
    </div>
    <style>{`
      .features-container {
        width: fit-content;
        margin: auto;
      }
      @media only screen and (min-width: 974px) {
        .features-container {
          display: flex;
        }
      }
    `}</style>
      {
        content.reduce((acc, elem, index) => {
          const size = content.length % 2 == 0 ? 2 : 3
          index % size == 0 ? acc.push([elem]) : acc[Math.floor(index / size)].push(elem)
          return acc
        }, [])
        .map((row, rowIndex) =>
          <div key={rowIndex} className="features-container">
            {
              row.map((feature, index, key) => <Feature key={index} title={feature.title} description={feature.description} image={feature.image} />)
            }
          </div>
        )
      }
  </div>
</div>

export default Features
