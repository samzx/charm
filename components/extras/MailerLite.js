import React, { useState, useEffect } from 'react';
import { attachScriptContent, attachScriptSrc} from '../../helpers/attachScript'

const textFieldContainerStyle = {
  // display: "inline-block"
}

const textFieldStyle = {
  height: 45,
  width: 244,
  // display: "inline-block",
  margin: 0,
  border: 0,
  padding: "0 0 0 16px",
  fontSize: 16
}

const buttonContainerStyle = {
  // display: "inline-block"
}
const buttonStyle = {
  height: 45,
  border: "none",
  fontSize: 16,
  padding: "0 20px",
	appearance: "none"
}

const MailerLite = ({ id, dataCode, content }) => {

  const { title, subtitle, description, successTitle, successSubtitle, buttonText, buttonLoadingText, buttonBackgroundColor, buttonTextColor, actionColor } = content

  // Hides form and shows thank you on success.
  useEffect(() => { attachScriptContent(`function ml_webform_success_${id}(){var r=ml_jQuery||jQuery;r(".ml-subscribe-form-${id} .row-success").show(),r(".ml-subscribe-form-${id} .row-form").hide()}`) }, []);
  // Stops redirection
  useEffect(() => { attachScriptSrc('https://static.mailerlite.com/js/w/webforms.min.js') }, []); // append ?v4a60e9ef938a7fa0240ac9ba567062cb if neccessary

  return (  
    <div className="email">
    <style>{`
      .ml-block-form {
        width: fit-content;
        margin: 20px auto;
        box-shadow: -6px 6px 20px 0px rgba(0,0,0,0.1);
      }
      .primary {
        cursor: pointer;
      }
      .loading {
        cursor: wait;
      }
      .primary {
        background: ${buttonBackgroundColor};
        transition: background 0.3s;
      }
      .primary:hover, .loading {
        background: ${actionColor};
      }
      @media only screen and (max-width: 974px) {
        .ml-block-form {
          display: block;
        }
        .primary, .loading {
          width: 260px;
        }
        .form-control {
          text-align: center;
        }
      }
      @media only screen and (min-width: 974px) {
        .ml-block-form{
          display: flex;
        }
        .email {
          width: 375px;
          margin: auto;
        }
      }
    `}</style>
      <div id={`mlb2-${id}`} className={`ml-form-embedContainer ml-subscribe-form ml-subscribe-form-${id}`}>
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <div className="ml-form-embedContent">
                <h4>{title}</h4>
                <h3>{subtitle}</h3>
                <p>{description}</p>
              </div>
              <form className="ml-block-form" action={`https://app.mailerlite.com/webforms/submit/${dataCode}`} data-code={dataCode} method="post" target="_blank">
                <div style={textFieldContainerStyle} className="ml-form-formContent">
                  <div className="ml-form-fieldRow ml-last-item">
                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                      <input style={textFieldStyle} type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="Email address"/>
                    </div>
                  </div>
                </div>
                <input type="hidden" name="ml-submit" value="1"/>
                <div style={buttonContainerStyle} className="ml-form-embedSubmit">
                  <button style={{...buttonStyle, color: buttonTextColor }} type="submit" className="primary">{buttonText}</button>
                  <button disabled="disabled" style={{...buttonStyle, "display":"none", color: buttonTextColor }} type="button" className="loading">
                    <div className="ml-form-embedSubmitLoad">
                      <div>{buttonLoadingText}</div>
                    </div>
                  </button>
                </div>
              </form>
            </div>
            <div className="ml-form-successBody row-success" style={{"display":"none"}}>
              <div className="ml-form-successContent">
                <h3>{successTitle}</h3>
                <p style={{fontSize: 16}}>{successSubtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MailerLite