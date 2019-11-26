const Header = ({ name }) =>
<div className="section" style={{minHeight: "inherit"}}>
  <div className="section-container" style={{ textAlign: 'left'}}>
    <h1 style={{ marginLeft: 10, fontSize: 28 }}>{name}</h1>
  </div>
</div>

export default Header