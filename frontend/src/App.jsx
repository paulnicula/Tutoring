import { useEffect, useState } from 'react'

function App() {
  const [msg, setMsg] = useState("Loading...")

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/test/")
      .then(res => res.json())
      .then(data => setMsg(data.status))
      .catch(() => setMsg("Error connecting"))
  }, [])

  return (
    <div>
      <h1>Paul Tutor Website</h1>
      <p>{msg}</p>
    </div>
  )
}

export default App