const Footer = ({ links }) =>
<div className="section" style={{minHeight: "auto", background: "#0f0f0f"}}>
  <div className="section-container" style={{color: "white", padding: "50px", textAlign: "left"}}>
    {
      links.map((link, index) => <p key={index} ><a href={link.href} target="_blank">{link.name}</a></p> )
    }
  </div>
</div>

export default Footer
