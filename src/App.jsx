import { useState } from "react"
import { Dashboard } from "./pages/Dashboard"
import { DashRespnsive } from "./styles/dashResponsive"

function App() {
  const [count, setCount] = useState(0)

  return (
    <DashRespnsive>
      <Dashboard />
    </DashRespnsive>
  )
}

export default App
