import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ChevronDown } from 'lucide-react'
import { photos } from '../data/photos'
import { siteContent } from '../data/content'

export function Hero({ onOpenLightbox }) {
  return (
    <section className="relative min-h-[92svh] md:min-h-[100svh] flex flex-col justify-between pt-10 md:pt-16 pb-12 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Top Editorial Bar */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center justify-between border-b border-[#E2D1FF]/60 pb-4 mb-8 md:mb-12"
      >
        <span className="text-xs uppercase tracking-widest text-[#786E80] font-medium">
          Personal Celebration
        </span>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0E7FF] text-[#7047A5] text-xs font-medium border border-[#E2D1FF]">
          <Sparkles className="w-3 h-3 text-[#A875E4]" />
          <span>{siteContent.hero.badge}</span>
        </div>
      </motion.div>

      {/* Main Editorial Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-grow">
        {/* Left Column: Typography & Story */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left"
        >
          <div className="inline-block mb-3">
            <span className="text-sm font-semibold tracking-wider text-[#A875E4] uppercase">
              {siteContent.person} • S.Farm
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-display font-medium text-[#352B40] leading-[1.12] tracking-tight mb-5">
            {siteContent.hero.title}
          </h1>

          <p className="text-lg sm:text-xl font-editorial italic text-[#7047A5] mb-4">
            {siteContent.hero.subtitle}
          </p>

          <p className="text-base sm:text-lg text-[#786E80] max-w-lg leading-relaxed font-light mb-8 mx-auto lg:mx-0">
            {siteContent.hero.supportingText}
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="h-px w-12 bg-[#A875E4]/50" />
            <span className="font-handwriting text-2xl text-[#7047A5]">
              {siteContent.eventDateFormatted}
            </span>
          </div>
        </motion.div>

        {/* Right Column: Hero Portrait Photograph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 order-1 lg:order-2 flex justify-center"
        >
          <div
            onClick={() => onOpenLightbox(photos.hero.src, photos.hero.alt)}
            className="group relative w-full max-w-sm sm:max-w-md lg:max-w-none rounded-3xl overflow-hidden glass-card p-3 md:p-4 cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
          >
            {/* Soft decorative background framing */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#CCAEF3]/40 via-[#F0E7FF]/20 to-transparent rounded-3xl -z-10 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

            <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#F0E7FF]">
              <img
                src={photos.hero.src}
                alt={photos.hero.alt}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ objectPosition: photos.hero.objectPosition }}
              />

              {/* Gradient overlay on bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#352B40]/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

              {/* Floating photo tag pill */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs px-3.5 py-2 rounded-full bg-[#352B40]/60 backdrop-blur-md border border-white/20">
                <span className="font-medium tracking-wide">Ulfatul Mutthoimah, S.Farm</span>
                <span className="text-[10px] opacity-80 uppercase">Yudisium 2026</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-col items-center justify-center pt-8 text-[#786E80]/80"
      >
        <span className="text-xs tracking-widest uppercase mb-2 font-medium">
          {siteContent.hero.scrollCue}
        </span>
        <ChevronDown className="w-4 h-4 text-[#A875E4] animate-bounce" />
      </motion.div>
    </section>
  )
}
