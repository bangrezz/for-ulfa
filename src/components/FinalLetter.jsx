import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MailOpen, Heart, Sparkles } from 'lucide-react'
import { siteContent } from '../data/content'

export function FinalLetter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="py-20 md:py-32 px-5 sm:px-8 max-w-3xl mx-auto text-center">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-[#A875E4] font-semibold">
          Final Note
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-[#352B40] leading-tight mt-2">
          {siteContent.finalLetter.teaser}
        </h2>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* Closed Envelope Trigger */
            <motion.div
              key="closed-envelope"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(true)}
              className="group cursor-pointer glass-card rounded-3xl p-10 sm:p-14 border border-[#E2D1FF] hover:border-[#A875E4]/60 hover:shadow-2xl transition-all duration-500 max-w-md mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-[#F0E7FF] group-hover:bg-[#E2D1FF] flex items-center justify-center text-[#7047A5] mx-auto mb-6 transition-transform duration-500 group-hover:scale-110 shadow-md">
                <Mail className="w-7 h-7 text-[#A875E4]" />
              </div>

              <p className="text-base sm:text-lg font-medium text-[#352B40] mb-2 group-hover:text-[#7047A5] transition-colors">
                {siteContent.finalLetter.openPrompt}
              </p>
              <span className="text-xs text-[#786E80] font-light">
                A personal letter from the heart
              </span>
            </motion.div>
          ) : (
            /* Open Letter Content */
            <motion.div
              key="opened-letter"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-3xl p-8 sm:p-12 md:p-14 border border-[#E2D1FF] shadow-2xl text-left relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-[#E2D1FF]/70 pb-4 mb-6">
                <div className="flex items-center gap-2 text-[#7047A5]">
                  <MailOpen className="w-4 h-4 text-[#A875E4]" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Letter for Ulfa</span>
                </div>
                <Heart className="w-4 h-4 text-[#A875E4] fill-[#A875E4]/30" />
              </div>

              <div className="space-y-4 text-base sm:text-lg md:text-xl font-editorial italic text-[#352B40] leading-relaxed">
                {siteContent.finalLetter.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#E2D1FF]/50 flex justify-end">
                <span className="font-signature text-3xl sm:text-4xl text-[#7047A5]">
                  {siteContent.finalLetter.signature}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
