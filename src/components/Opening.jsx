import React from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Heart, Sparkles } from 'lucide-react'
import { siteContent } from '../data/content'

export function Opening({ onOpen }) {
  const handleOpenClick = () => {
    // Elegant soft celebratory confetti burst with lavender/pink/gold colors
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#A875E4', '#E2D1FF', '#F0E7FF', '#FFD1DC', '#FFFFFF'],
        disableForReducedMotion: true
      })
    } catch {
      // safe fallback
    }

    onOpen()
  }

  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center min-h-[100svh] px-6 bg-[#FBF9FF] text-center select-none"
    >
      {/* Soft central radiant background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-[#F0E7FF] via-[#E2D1FF]/40 to-transparent blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-md mx-auto flex flex-col items-center"
      >
        {/* Little decorative icon badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0E7FF]/80 border border-[#E2D1FF] text-[#7047A5] text-xs font-medium mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#A875E4]" />
          <span>A Special Gift</span>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-[#352B40] leading-tight tracking-tight mb-4">
          {siteContent.opening.greeting}
        </h1>

        <p className="text-base sm:text-lg text-[#786E80] font-light max-w-sm mb-9 leading-relaxed">
          {siteContent.opening.subtext}
        </p>

        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleOpenClick}
          className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#A875E4] hover:bg-[#7047A5] text-white text-base font-medium shadow-lg shadow-[#A875E4]/25 hover:shadow-xl hover:shadow-[#7047A5]/30 transition-all duration-300 active:scale-95"
        >
          <span>{siteContent.opening.cta}</span>
          <Heart className="w-4 h-4 fill-white/80 group-hover:scale-110 transition-transform duration-300" />
        </motion.button>
      </motion.div>
    </motion.section>
  )
}
