import { useState, useEffect } from 'react'
import { GlobalStyle } from '../globalStyles'
import Editor from './Editor'
import { TopPane, Pane } from './styles'

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 2500)
    return () => clearTimeout(timeout)
  }, [html, css, js])



  return (
    <>
      <GlobalStyle />
      <TopPane>
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs} />
      </TopPane>
      <Pane>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          framBorder="0"
          width="100%"
          height="100%"
        />
      </Pane>
    </>
  );
}

export default App;
