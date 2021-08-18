import { useState, useEffect } from 'react'

export default function useTimer() {
  const [timer, setTimer] = useState(0);
  
  useEffect(() => {
    setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000)
  }, [])

  let minutes = Math.floor(timer / 60);
  let seconds = timer - minutes * 60;
  if (minutes < 10) {
    if (seconds < 10) {
      return `0${minutes}:0${seconds}`
    } else {
      return `0${minutes}:${seconds}`
    }
  } else {
    if (seconds < 10) {
      return `${minutes}:0${seconds}`
    } else {
      return `${minutes}:${seconds}`
    }
  }
}
