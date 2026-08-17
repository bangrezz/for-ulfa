import React from 'react'
import { motion } from 'framer-motion'
import { siteContent } from '../data/content'

export function Achievement() {
  return (
    <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-[0.25em] text-[#A875E4] font-semibold mb-4">
          Milestone Accomplished
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-display font-medium text-[#352B40] leading-tight mb-4">
          {siteContent.achievement.title}
        </h2>

        <div className="flex items-center gap-3 my-3">
          <div className="h-px w-8 bg-[#E2D1FF]" />
          <span className="text-xl sm:text-2xl font-serif-display text-[#7047A5] font-light">
            {siteContent.achievement.date}
          </span>
          <div className="h-px w-8 bg-[#E2D1FF]" />
        </div>

        <p className="text-base sm:text-xl text-[#786E80] font-light max-w-2xl mt-4 leading-relaxed">
          {siteContent.achievement.copy}
        </p>
      </motion.div>
    </section>
  )
}
