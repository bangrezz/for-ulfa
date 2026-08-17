import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { photos } from '../data/photos'
import { siteContent } from '../data/content'

export function CinematicSection({ onOpenLightbox }) {
  return (
    <section className="py-20 md:py-32 px-5 sm:px-8 max-w-6xl mx-auto">
      <div className="relative rounded-3xl md:rounded-[2.5rem] overflow-hidden glass-card p-4 sm:p-6 md:p-8 border border-[#E2D1FF]/70 shadow-2xl">
        {/* Responsive Container */}
        <div
          onClick={() => onOpenLightbox(photos.cinematic.src, photos.cinematic.alt)}
          className="group relative w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#352B40] min-h-[520px] md:min-h-[640px] flex items-end cursor-pointer"
        >
          {/* Background Photograph */}
          <img
            src={photos.cinematic.src}
            alt={photos.cinematic.alt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            style={{ objectPosition: photos.cinematic.objectPosition }}
          />

          {/* Gentle cinematic lavender & dark overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#352B40]/90 via-[#7047A5]/30 to-transparent" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#352B40]/40" />

          {/* Foreground Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 p-6 sm:p-10 md:p-14 text-white max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white/90 text-xs font-medium uppercase tracking-wider mb-4 border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-[#E2D1FF]" />
              <span>Milestone</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-display font-medium leading-tight mb-2 text-white">
              {siteContent.cinematic.heading}
            </h2>

            <p className="text-xl sm:text-3xl font-editorial italic text-[#E2D1FF] mb-4">
              {siteContent.cinematic.subheading}
            </p>

            <p className="text-xs sm:text-sm text-white/75 font-light tracking-wide uppercase">
              {siteContent.cinematic.caption}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
