const Header = ({ name, icon }) =>
<div className="section" style={{minHeight: "inherit"}}>
  <div className="section-container" style={{ textAlign: 'left', display: "flex"}}>
    { icon &&  <div style={{ backgroundImage: `url(${icon})`, height: 40, width: 40, margin: "auto 0 auto 10px", borderRadius: 5, backgroundSize: "cover" }} /> }
    <h1 style={{ marginLeft: 10, fontSize: 28, fontWeight: 500 }}>{name}</h1>
  </div>
</div>

export default Header