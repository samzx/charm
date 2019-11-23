import React, { useState } from 'react';

const AppStyle = () =>
<style jsx="true">{`
  body {
    background: #fbf4f0;
    margin: 0;
    font-family: -apple-system,system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
  }
  .section {
    height: 800px;
    display: flex;
  }
  .section-container {
    width: 1462px;
    margin: auto;
  }
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 62px;
  }
`}</style>

const Header = () =>
<div className="section" style={{height: "inherit"}}>
  <div className="section-container">
    <h1>I am a Header</h1>
  </div>
</div>

const Hero = () => {

  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState('')

  return (  
    <div className="section">
      <div className="section-container">
        <h2>I am a Hero</h2>
        <h1>Requests sent: {counter}</h1>
        <form onSubmit={(event) => {
            event.preventDefault()
            if (input) {
              fetch(`http://localhost:3000/?input=${input}`).then((resp) => console.log(resp))
              setCounter(counter + 1)
              setInput('')
              document.activeElement.blur();
            } else {
              document.getElementById("email-input").focus()
              return
            }

          }}>
          <label htmlFor="email-input" style={{display: "block"}}>Early access invitations are rolling out soon — get on the waitlist!</label>
          <input type="email" id="email-input" value={input} onChange={(event) => setInput(event.target.value)}/>
          <button>
            Click me!
          </button>
        </form>
      </div>
    </div>
  )
}

const Demonstration = () =>
<div className="section">
  <div className="section-container">
    <h2>I am a Demonstration</h2>
  </div>
</div>

const Features = () =>
<div className="section">
  <div className="section-container">
    <h2>I am a Features</h2>
  </div>
</div>

const Exit = () =>
<div className="section">
  <div className="section-container">
    <h2>I am an Exit</h2>
  </div>
</div>

const Footer = () =>
<div className="section" style={{height: "200px", background: "black"}}>
  <div className="section-container" style={{color: "white", padding: "50px"}}>
    <h1>I am a Footer</h1>
  </div>
</div>

const Index = () => (
  <div className="app">
    <AppStyle/>
    <div>
      <Header />
      <Hero />
      <Demonstration />
      <Features />
      <Exit />
      <Footer />
    </div>
  </div>
);

export default Index;
