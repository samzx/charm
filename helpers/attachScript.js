export const attachScriptContent = (scriptHTML) => {
  const script = document.createElement("script");
  script.async = true;
  script.setAttribute('type', 'text/javascript');
  script.innerHTML = scriptHTML;
  document.body.appendChild(script);
}

export const attachScriptSrc = (src) => {
  const script = document.createElement("script");
  script.async = true;
  script.setAttribute('type', 'text/javascript');
  script.src = src
  document.body.appendChild(script);
}
