import { useState } from 'react'

import './App.css'
import LayoutRoutes from './routes/LayoutRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<LayoutRoutes/>
    </>
  )
}

export default App
