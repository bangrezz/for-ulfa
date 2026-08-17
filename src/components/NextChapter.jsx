import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Sparkles } from 'lucide-react'
import { siteContent } from '../data/content'
import { useGraduationCountdown } from '../hooks/useGraduationCountdown'

export function NextChapter() {
  const countdown = useGraduationCountdown(siteContent.graduation.date)

  return (
    <section className="py-20 md:py-32 px-5 sm:px-8 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 border border-[#E2D1FF] relative overflow-hidden"
      >
        {/* Soft background ambient gradient */}
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-64 h-64 bg-[#E2D1FF]/40 rounded-full blur-3xl -z-10" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0E7FF] text-[#7047A5] text-xs font-semibold uppercase tracking-wider mb-6 border border-[#E2D1FF]">
          <GraduationCap className="w-4 h-4 text-[#A875E4]" />
          <span>{siteContent.graduation.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-display font-medium text-[#352B40] leading-tight mb-3">
          {siteContent.graduation.title}
        </h2>

        <div className="inline-flex items-center gap-2 text-lg sm:text-xl font-medium text-[#7047A5] mb-6">
          <Calendar className="w-4 h-4 text-[#A875E4]" />
          <span>
            {siteContent.graduation.month} {siteContent.graduation.year}
          </span>
        </div>

        {/* Dynamic Countdown: only active if target date is configured */}
        {countdown.hasDate && !countdown.isExpired ? (
          <div className="grid grid-cols-4 gap-3 max-w-md mx-auto my-6">
            {[
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Mins', value: countdown.minutes },
              { label: 'Secs', value: countdown.seconds }
            ].map((unit, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-[#F0E7FF]/70 border border-[#E2D1FF]">
                <span className="block text-2xl sm:text-3xl font-serif-display font-bold text-[#352B40]">
                  {unit.value}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#786E80]">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-base sm:text-xl text-[#786E80] font-light max-w-lg mx-auto leading-relaxed mt-2">
            {siteContent.graduation.copy}
          </p>
        )}
      </motion.div>
    </section>
  )
}
