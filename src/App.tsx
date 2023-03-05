import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div>
        <input type="text" placeholder='Fazer sla'/>
        <button>Adicionar</button>
      </div>
    </div>
  )
}

export default App
