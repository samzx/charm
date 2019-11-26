import React, { useState } from 'react';

// Should be faded out 50%
const MobileHeroImage = ({ image, setShow, show }) =>
<div className="mobile-hero-image-container" style={{ overflow: "hidden" }} >
  <style>{`
    .mobile-hero-image-container {
      margin-top: -367px;
      height: 667px;
    }
    .hero-image--mobile {
      transform: translate(0px, 367px);
      transition: 0.3s transform;
    }
    .hero-image--mobile__show {
      transform: translate(0px, 120px);
      transition: 0.3s transform;
    }
    @media only screen and (max-width: 974px) {
      .mobile-hero-image-container {
        margin-right: 0px;
      }
    }
    @media only screen and (min-width: 974px) {
      .mobile-hero-image-container {
        margin-right: 50px;
      }
      .hero-image--mobile {
        width: 375px;
      }
    }
  `}</style>
  <div  onMouseLeave={() => setShow(false)} className={ `hero-image--mobile ${show ? "hero-image--mobile__show" : ""}` } style={{ background: `url(${image})`, backgroundSize: "cover", height: 667, maxWidth: 375, borderRadius: "20px" }}>
    <div onClick={() => setShow(!show)} style={{ cursor: "pointer"}} ><Circle /></div>
  </div>
</div>

const DesktopHeroImage = ({ image }) =>
<div style={{ background: `url(${image})`, backgroundSize: "cover", height: "50vw", maxHeight: 720, maxWidth: 1280, margin: "auto", borderRadius: "20px 20px 0 0", }}>
  <div style={{width: "100%"}}/>
</div>

const DesktopContent = ({ image, Action }) =>
<React.Fragment>
  <div style={{ flex: 1, height: 200, marginBottom: 50 }}>
    <Action />
  </div>
  <div style={{ flex: 1 }}>
    { image && <DesktopHeroImage image={image} /> }
  </div>
</React.Fragment>

const MobileContent = ({ image, setShow, show, Action }) =>
<React.Fragment>
  <style>{`
  .mail-list--mobile {
    flex: 1;
    max-width: 375px;
    height: 200px;
    transition: filter 0.3s;
  }
  @media only screen and (max-width: 974px) {
    .mail-list--mobile__right {
      display: none;
      text-align: left;
    }
  }
  @media only screen and (min-width: 974px) {
    .mail-list--mobile__top {
      display: none;
      text-align: center;
    }
  }
  `}</style>
  <div className="mail-list--mobile mail-list--mobile__top" style={{ marginBottom: 50, filter: show ? "blur(5px)" : ""}}>
    <Action />
  </div>
  <div style={{ flex: 1 }}>
    { image && <MobileHeroImage image={image} show={show} setShow={setShow}/> }
  </div>
  <div className="mail-list--mobile mail-list--mobile__right" style={{ marginBottom: 100, filter: show ? "blur(5px)" : "" }}>
    <Action />
  </div>
</React.Fragment>

const Hero = ({ isMobile, title, image, Action }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="section" style={{ minHeight: "inherit" }}>
    <style>{`
      @media only screen and (max-width: 974px) {
        .section-container--content {
          text-align: center;
        }
      }
      @media only screen and (min-width: 974px) {
        .section-container--content {
          display: flex;
        }
      }
    `}</style>
      <div className={`section-container`}>
        <div className="title-container" style={{ filter: show ? "blur(5px)" : "", transition: "filter 0.3s"}}>
          <h2>{title}</h2>
        </div>
        <div className="section-container--content" style={isMobile ? { margin: "auto", width: "fit-content"} : {display: "block"}}>
          { isMobile ? <MobileContent image={image} show={show} setShow={setShow} Action={Action} /> : <DesktopContent image={image} Action={Action} />}
        </div>
      </div>
    </div>
  )
}
export default Hero


const Circle = () =>
<div>
  <style>{`
    @keyframes pulse {
      0% {
        transform: scale(1.5);
        opacity: 0.5; }

      50% {
        transform: scale(1.67);
        opacity: 0.5; }

      100% {
        transform: scale(1.5);
        opacity: 0.5; }
    }
    .circle-base {
      position: absolute;
      left: 20px;
      top: 20px;
      width: 15px;
      height: 15px;
      border-radius: 80px;
      {/* box-shadow: 0 0 5px rgba(255, 93, 0, 0.5); */}
      background: rgba(0, 146, 255, 0.5);
      z-index: 1000;
      opacity: 1;
    }
    .animated-circle {
      background: rgba(0, 146, 255, 0.5);
      -webkit-transform: scale(0.8);
      -webkit-animation: pulse 1s ease-in-out infinite;
      animation: pulse 1s ease-in-out infinite;
    }
    .top-circle {
      background: rgba(0, 146, 255, 1);
      {/* box-shadow: 0 0 5px rgba(255, 93, 0, 1); */}
    }
  `}
  </style>
  <div className="circle-base animated-circle"/>
  <div className="circle-base top-circle"/>
</div>
