import { ChangeEvent, useState } from 'react'
import Card from './components/Card'
import './App.css'

export type Todo = {
  id: string
  title: string
  completed: boolean
}

function App() {
  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  function handleAddTodo() {
    const newTodo: Todo = {
      id: Math.random().toString(),
      completed: false,
      title: todoInput
    }
    console.log({ todos })
    setTodos((previousTodos) => [...previousTodos, newTodo])

    setTodoInput('')
  }

  function handleInputChange (e: ChangeEvent<HTMLInputElement>) {
    setTodoInput(e.target.value)
  }

  function changeCompleteTodo (id: string) {
    setTodos((previousTodos) => 
      previousTodos.map(todo => todo.id !== id ? todo : { ...todo, completed: !todo.completed })
    )
  }

  function deleteTodo (id: string) {
    setTodos((previousTodos) => 
      previousTodos.filter(todo => todo.id !== id)
    )
  }

  return (
    <div className='App'>
      <div className='add-todo'>
        <input type="text" placeholder='Digite sua tarefa' value={todoInput} onChange={handleInputChange}/>
        <button onClick={handleAddTodo}>Adicionar</button>
      </div>

      {
        todos.map((todo) => (
          <Card key={todo.id} todo={todo} changeCompleteTodo={changeCompleteTodo} deleteTodo={deleteTodo}/>
        ))
      }
    </div>
  )
}

export default App
