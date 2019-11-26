import React, { useEffect } from 'react';
import { attachScriptContent, attachScriptSrc} from '../../helpers/attachScript'

const GoogleAnalytics = ( { id } ) => {
  const scriptContent = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${id}');`

  useEffect(() => attachScriptSrc(`https://www.googletagmanager.com/gtag/js?id=${id}`), [])
  useEffect(() => attachScriptContent(scriptContent), [])
  return <div/>
}

export default GoogleAnalytics
