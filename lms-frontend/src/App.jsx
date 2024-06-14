import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import homeLayout from './Layouts/homeLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Footer/> */}
     <homeLayout />
    </>
  )
}

export default App
