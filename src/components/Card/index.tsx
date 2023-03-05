import { Todo } from '../../App'
import { useTimer } from '../../hooks/useTimer'
import './styles.css'

type CardProps = {
  todo: Todo
  changeCompleteTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export default function Card ({ todo, changeCompleteTodo, deleteTodo }: CardProps) {
  const { time } = useTimer(todo.time)

  function handleCompleteTodo () {
    changeCompleteTodo(todo.id)
  }

  function handleDeleteTodo () {
    deleteTodo(todo.id)
  }

  return (
    <div className={`card ${todo.completed ? 'done' : ''}`}>
      <h2>{todo.title}</h2>

      <div className="card-buttons">
        <span>{time}</span>
        <button onClick={handleCompleteTodo}>{todo.completed ? 'Retomar' : 'Completar'}</button>
        <button onClick={handleDeleteTodo}>Deletar</button>
      </div>
    </div>
  )
}
