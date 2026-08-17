import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AmbientDecorations } from './components/AmbientDecorations'
import { MusicControl } from './components/MusicControl'
import { Opening } from './components/Opening'
import { Hero } from './components/Hero'
import { Achievement } from './components/Achievement'
import { PersonalMessage } from './components/PersonalMessage'
import { Gallery } from './components/Gallery'
import { Lightbox } from './components/Lightbox'
import { ProudOfYou } from './components/ProudOfYou'
import { CinematicSection } from './components/CinematicSection'
import { NextChapter } from './components/NextChapter'
import { FinalLetter } from './components/FinalLetter'
import { Ending } from './components/Ending'
import { useAudio } from './hooks/useAudio'

export default function App() {
  const [isOpened, setIsOpened] = useState(false)
  const [lightboxData, setLightboxData] = useState({
    isOpen: false,
    photo: null
  })

  const { isPlaying, isMuted, hasAudioFile, playWithFadeIn, toggleMute } = useAudio()

  const handleOpenSurprise = () => {
    setIsOpened(true)
    playWithFadeIn(0.3, 1200)
  }

  const openLightbox = (src, alt) => {
    setLightboxData({
      isOpen: true,
      photo: { src, alt }
    })
  }

  const closeLightbox = () => {
    setLightboxData({
      isOpen: false,
      photo: null
    })
  }

  return (
    <div className="relative min-h-screen bg-[#FBF9FF] text-[#352B40] overflow-x-hidden selection:bg-[#E2D1FF]">
      {/* Ambient background decoration */}
      <AmbientDecorations />

      {/* Floating Audio Controller */}
      <MusicControl
        isPlaying={isPlaying}
        isMuted={isMuted}
        toggleMute={toggleMute}
        hasAudioFile={hasAudioFile}
      />

      {/* Opening Entrance Modal */}
      <AnimatePresence>
        {!isOpened && <Opening onOpen={handleOpenSurprise} />}
      </AnimatePresence>

      {/* Main Experience (Visible after open) */}
      {isOpened && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          {/* Section 02 — Hero */}
          <Hero onOpenLightbox={openLightbox} />

          {/* Section 03 — Achievement */}
          <Achievement />

          {/* Section 04 — Personal Message */}
          <PersonalMessage />

          {/* Section 05 — Photo Story / Gallery */}
          <Gallery onOpenLightbox={openLightbox} />

          {/* Section 06 — Proud of You */}
          <ProudOfYou />

          {/* Section 07 — Cinematic Section */}
          <CinematicSection onOpenLightbox={openLightbox} />

          {/* Section 08 — Next Chapter */}
          <NextChapter />

          {/* Section 09 — Final Letter */}
          <FinalLetter />

          {/* Section 10 — Ending */}
          <Ending onOpenLightbox={openLightbox} />
        </motion.main>
      )}

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        isOpen={lightboxData.isOpen}
        photo={lightboxData.photo}
        onClose={closeLightbox}
      />
    </div>
  )
}
