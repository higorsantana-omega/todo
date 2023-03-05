import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='add-todo'>
        <input type="text" placeholder='Fazer sla'/>
        <button>Adicionar</button>
      </div>

      <Card title={'Titutlo'} />
    </div>
  )
}

export default App
