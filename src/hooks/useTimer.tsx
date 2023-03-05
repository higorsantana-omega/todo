import { useEffect, useState } from "react"

function useTimer (targetTime: string) {
  const [timer, setTimer] = useState(targetTime)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        let { hour, minutes, seconds } = separateHours(prevTimer)

        if (seconds < 60) {
          seconds += 1
        }

        if (minutes < 60 && seconds === 60) {
          minutes += 1
          seconds = 0
        }

        if (minutes === 60) {
          hour += 1
          minutes = 0
        }

        return `${formatTime(hour)}:${formatTime(minutes)}:${formatTime(seconds)}`
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [timer])

  return { time: timer }
}

function separateHours (timer: string) {
  const [hour, minutes, seconds] = timer.split(':')
  return { hour: Number(hour), minutes: Number(minutes), seconds: Number(seconds) }
}

function formatTime (time: number) {
  if (String(time).length === 2) return time

  return `0${time}`
} 

export { useTimer }
