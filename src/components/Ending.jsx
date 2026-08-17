import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { photos } from '../data/photos'
import { siteContent } from '../data/content'

export function Ending({ onOpenLightbox }) {
  return (
    <footer className="pt-12 pb-24 px-5 sm:px-8 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        {/* Closing Detail Photograph */}
        <div
          onClick={() => onOpenLightbox(photos.ending.src, photos.ending.alt)}
          className="group relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden glass-card p-2 border-2 border-[#E2D1FF] mb-8 cursor-pointer shadow-xl hover:scale-105 transition-transform duration-500"
        >
          <img
            src={photos.ending.src}
            alt={photos.ending.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
            style={{ objectPosition: photos.ending.objectPosition }}
          />
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif-display font-medium text-[#352B40] mb-2">
          {siteContent.ending.title}
        </h2>

        <p className="text-sm sm:text-base font-handwriting text-xl text-[#7047A5] mb-6">
          {siteContent.ending.date}
        </p>

        <p className="text-xs sm:text-sm text-[#786E80] font-light max-w-sm italic mb-6">
          {siteContent.ending.footerText}
        </p>

        <span className="font-signature text-3xl sm:text-4xl text-[#7047A5] mb-8">
          {siteContent.ending.signature}
        </span>

        <div className="flex items-center gap-2 text-xs text-[#CCAEF3]">
          <span className="w-8 h-px bg-[#E2D1FF]" />
          <Heart className="w-3.5 h-3.5 fill-[#CCAEF3]" />
          <span className="w-8 h-px bg-[#E2D1FF]" />
        </div>
      </motion.div>
    </footer>
  )
}
