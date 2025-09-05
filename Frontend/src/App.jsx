import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar />
   <h1>Loges</h1>
   </>
  )
}

export default App
