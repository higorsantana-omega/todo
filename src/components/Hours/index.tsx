import { useState } from 'react'
import './styles.css'

export default function Hours () {
  const [time, setTime] = useState('00:00')

  return (
    <div className="hours">
      <div className='timer'>
        {time}
      </div>
    </div>
  )
}