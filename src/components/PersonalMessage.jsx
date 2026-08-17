import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { siteContent } from '../data/content'

export function PersonalMessage() {
  return (
    <section className="py-16 md:py-24 px-5 sm:px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative glass-card rounded-3xl p-8 sm:p-12 md:p-14 text-center overflow-hidden border border-[#E2D1FF]/70 shadow-xl"
      >
        {/* Subtle decorative quote / sparkle corner */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#E2D1FF]/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#F0E7FF]/50 rounded-full blur-2xl pointer-events-none" />

        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F0E7FF] text-[#A875E4] mb-6 shadow-sm">
          <Heart className="w-5 h-5 fill-[#A875E4]/20" />
        </div>

        <div className="mb-6">
          <span className="text-xs uppercase tracking-widest text-[#7047A5] font-semibold">
            {siteContent.personalMessage.badge}
          </span>
        </div>

        <p className="text-lg sm:text-2xl font-editorial italic text-[#352B40] leading-relaxed max-w-xl mx-auto mb-8 font-normal">
          &ldquo;{siteContent.personalMessage.message}&rdquo;
        </p>

        <div className="flex flex-col items-center">
          <span className="font-signature text-3xl sm:text-4xl text-[#7047A5]">
            {siteContent.personalMessage.signature}
          </span>
        </div>
      </motion.div>
    </section>
  )
}
