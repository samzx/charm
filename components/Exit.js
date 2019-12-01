const Exit = ({ title, Action }) =>
<div className="section" style={{ background: "#fefefe"}}>
  <div className="section-container" style={{ marginBottom: "100px"}}>
    <div className="title-container" style={{ maxWidth: 720 }}>
      <h2>{title}</h2>
    </div>
    <Action/>
  </div>
</div>

export default Exit
