import { ChangeEvent } from 'react'
import './styles.css'

type InputProps = {
  todoInput: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input ({ todoInput, handleInputChange }: InputProps) {
  return (
    <input
      type="text"
      placeholder='Digite sua tarefa'
      value={todoInput}
      onChange={handleInputChange}
      className='todoInput'
    />
  )
}