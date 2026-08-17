import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Compass, Award } from 'lucide-react'
import { siteContent } from '../data/content'

export function ProudOfYou() {
  const iconMap = {
    sparkles: Sparkles,
    heart: Heart,
    compass: Compass,
    award: Award
  }

  return (
    <section className="py-20 md:py-32 px-5 sm:px-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-20">
        <span className="text-xs uppercase tracking-widest text-[#A875E4] font-semibold">
          {siteContent.proudOfYou.badge}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-[#352B40] leading-tight mt-3">
          {siteContent.proudOfYou.title}
        </h2>
      </div>

      {/* Vertical Story Cards */}
      <div className="space-y-6 sm:space-y-8">
        {siteContent.proudOfYou.cards.map((card, index) => {
          const IconComponent = iconMap[card.icon] || Sparkles

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-[#E2D1FF]/60 hover:border-[#A875E4]/50 transition-all duration-400 group"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Icon Badge */}
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F0E7FF] group-hover:bg-[#E2D1FF] flex items-center justify-center text-[#7047A5] transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Text Content */}
                <div className="flex-grow pt-1">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-serif-display font-medium text-[#352B40] group-hover:text-[#7047A5] transition-colors">
                      {card.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#A875E4]/80 hidden sm:inline-block">
                      {card.tag}
                    </span>
                  </div>

                  <p className="text-base sm:text-lg text-[#786E80] font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
