const Footer = ({ links }) =>
<div className="section" style={{minHeight: "auto", background: "#0f0f0f"}}>
  <style jsx="true">{`
    .linked {
      position: relative;
    } 
    .linked::after {
      width: 0%;
      content: "";
      height: 1px;
      background: #fff;
      position: absolute;
      left: 0;
      bottom: -5px;
      transition: width 0.3s;
    }
    .linked:hover::after {
      width: 100%;
    }
  `}
  </style>
  <div className="section-container" style={{ padding: "50px", textAlign: "left", marginTop: 0, marginBottom: 0}}>
    {
      links.map((link, index) => <p key={index} ><a className="linked" href={link.href} target="_blank">{link.name}</a></p> )
    }
  </div>
</div>

export default Footer
