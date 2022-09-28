import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'

function App() {
  const [text, setText] = useState('')
  const canvasRef = useRef()

  useEffect(() => {
    QRCode.toCanvas(canvasRef.current, text || '', (error) => error && console.log(error))
  }, [text])

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />

      <canvas ref={canvasRef} />
    </div>
  )
}

export default App
