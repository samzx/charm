const Exit = ({ title, Action }) =>
<div className="section" style={{ background: "white"}}>
  <div className="section-container" style={{margin: "50px auto 100px auto"}}>
    <h2>{title}</h2>
    <Action/>
  </div>
</div>

export default Exit
