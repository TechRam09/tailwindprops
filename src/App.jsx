// import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' bg-green-500 text-black p-4 rounded-md mb-5'>Tailwind Test</h1>
      <Card username="Angela" btnText="Click Me"/>
      <Card username="Anagha"/>
    </>
  )
}

export default App
