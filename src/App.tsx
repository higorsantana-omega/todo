import { ChangeEvent, useEffect, useState } from 'react'
import Card from './components/Card'
import './App.css'
import Input from './components/Input'

export type Todo = {
  id: string
  title: string
  completed: boolean
}

function App() {
  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('@todosList:todos')
    if (storedTodos) {
      return JSON.parse(storedTodos)
    }

    return []
  })

  useEffect(() => {
    localStorage.setItem('@todosList:todos', JSON.stringify(todos))
  }, [todos])

  function handleAddTodo() {
    const newTodo: Todo = {
      id: Math.random().toString(),
      completed: false,
      title: todoInput
    }
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
        <Input todoInput={todoInput} handleInputChange={handleInputChange} />
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
