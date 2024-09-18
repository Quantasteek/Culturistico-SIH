import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import FeatureSection from './components/FeatureSection'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>

    <Navbar/>
    <Herosection/>
    <FeatureSection/>
  </>
  )
}

export default App
