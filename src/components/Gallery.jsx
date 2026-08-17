import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Maximize2 } from 'lucide-react'
import { photos } from '../data/photos'

export function Gallery({ onOpenLightbox }) {
  const rotationClasses = [
    'md:-rotate-1',
    'md:rotate-1.5',
    'md:-rotate-1.5',
    'md:rotate-1',
    'md:-rotate-2',
    'md:rotate-1.5',
    'md:-rotate-1'
  ]

  return (
    <section className="py-20 md:py-32 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Gallery Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0E7FF] text-[#7047A5] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#E2D1FF]">
          <Sparkles className="w-3 h-3 text-[#A875E4]" />
          <span>Floating Memories</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-medium text-[#352B40] leading-tight mb-4">
          Every Step of the Journey
        </h2>
        <p className="text-base sm:text-lg text-[#786E80] font-light">
          Setiap momen, senyuman, dan usaha yang mengiringi langkahmu hingga sampai di titik ini.
        </p>
      </div>

      {/* Editorial Scrapbook Flow */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {photos.gallery.map((item, index) => {
          // Layout hierarchy:
          // Item 0 (Proposal grass - huge milestone): span 7
          // Item 1 (Almamater portrait): span 5
          // Item 2 (Stairs candid): span 4
          // Item 3 (Reading skripsi): span 4
          // Item 4 (Architectural look): span 4
          // Item 5 (Elevator lobby): span 6
          // Item 6 (Playful bouquet peek): span 6
          const colSpans = [
            'lg:col-span-7',
            'lg:col-span-5',
            'lg:col-span-4',
            'lg:col-span-4',
            'lg:col-span-4',
            'lg:col-span-6',
            'lg:col-span-6'
          ]
          const spanClass = colSpans[index % colSpans.length]
          const rotationClass = rotationClasses[index % rotationClasses.length]

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`${spanClass} flex flex-col`}
            >
              <div
                onClick={() => onOpenLightbox(item.src, `${item.title} — ${item.subtitle}`)}
                className={`group relative rounded-3xl overflow-hidden glass-card p-3 sm:p-4 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 ${rotationClass}`}
              >
                {/* Image Container with precise aspect ratio and object position */}
                <div
                  className={`relative rounded-2xl overflow-hidden bg-[#F0E7FF] ${
                    item.aspectRatio === '9/16' ? 'aspect-[9/16] max-h-[580px]' : 'aspect-[3/4] max-h-[520px]'
                  } w-full`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ objectPosition: item.objectPosition }}
                  />

                  {/* Gentle hover vignette and icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352B40]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 text-white">
                    <span className="text-xs font-medium tracking-wider uppercase bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                      View Fullscreen
                    </span>
                    <Maximize2 className="w-5 h-5 opacity-90" />
                  </div>
                </div>

                {/* Card Caption Detail */}
                <div className="pt-4 pb-1 px-2">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base sm:text-lg font-serif-display font-medium text-[#352B40] group-hover:text-[#7047A5] transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F0E7FF] text-[#7047A5]">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#786E80] font-light line-clamp-2">
                    {item.subtitle}
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
