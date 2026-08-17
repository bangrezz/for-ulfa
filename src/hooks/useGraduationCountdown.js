import { useState, useEffect } from 'react'

export function useGraduationCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({
    hasDate: false,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  })

  useEffect(() => {
    if (!targetDate) {
      setTimeLeft({
        hasDate: false,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: false
      })
      return
    }

    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date()
      if (difference <= 0) {
        setTimeLeft({
          hasDate: true,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        })
        return
      }

      setTimeLeft({
        hasDate: true,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false
      })
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return timeLeft
}
