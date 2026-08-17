import { useState, useEffect, useRef, useCallback } from 'react'
import { getAssetUrl } from '../data/photos'

export function useAudio(audioSrc = 'audio/bgm.mp3') {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [hasAudioFile, setHasAudioFile] = useState(true)
  const audioRef = useRef(null)
  const fadeIntervalRef = useRef(null)

  useEffect(() => {
    const fullAudioUrl = getAssetUrl(audioSrc)
    const audio = new Audio()
    audio.src = fullAudioUrl
    audio.loop = true
    audio.preload = 'auto'
    audio.volume = 0

    audio.addEventListener('canplaythrough', () => {
      setHasAudioFile(true)
    })

    audio.addEventListener('error', () => {
      // Audio file not present or not supported - keep silent mode without errors
      setHasAudioFile(false)
    })

    audioRef.current = audio

    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current)
      audio.pause()
      audio.src = ''
    }
  }, [audioSrc])

  const playWithFadeIn = useCallback((targetVolume = 0.3, durationMs = 1500) => {
    if (!audioRef.current || !hasAudioFile) return

    const audio = audioRef.current
    audio.volume = 0

    const playPromise = audio.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true)
          const steps = 15
          const stepTime = durationMs / steps
          const volumeIncrement = targetVolume / steps
          let currentStep = 0

          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current)

          fadeIntervalRef.current = setInterval(() => {
            currentStep += 1
            const nextVol = Math.min(targetVolume, volumeIncrement * currentStep)
            if (audio) {
              audio.volume = nextVol
            }
            if (currentStep >= steps) {
              clearInterval(fadeIntervalRef.current)
            }
          }, stepTime)
        })
        .catch(() => {
          // Browser prevented autoplay or missing file - safe silent fallback
          setIsPlaying(false)
        })
    }
  }, [hasAudioFile])

  const toggleMute = useCallback(() => {
    if (!audioRef.current || !hasAudioFile) return
    const audio = audioRef.current
    if (isMuted) {
      audio.muted = false
      setIsMuted(false)
    } else {
      audio.muted = true
      setIsMuted(true)
    }
  }, [isMuted, hasAudioFile])

  return {
    isPlaying,
    isMuted,
    hasAudioFile,
    playWithFadeIn,
    toggleMute
  }
}
