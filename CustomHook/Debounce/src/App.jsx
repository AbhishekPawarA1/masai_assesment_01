import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Onclick} from './components/Onclick'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Onclick/>
    </>
  )
}

export default App
