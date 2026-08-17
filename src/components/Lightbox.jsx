import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

export function Lightbox({ isOpen, photo, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#352B40]/80 backdrop-blur-md select-none cursor-zoom-out"
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl max-h-[88vh] flex flex-col items-center cursor-default"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/20 border border-white/20">
              <img
                src={photo.src}
                alt={photo.alt}
                className="max-h-[75vh] w-auto object-contain rounded-2xl"
              />
            </div>

            {photo.alt && (
              <p className="mt-3.5 text-center text-sm font-light text-white/90 max-w-lg px-4 drop-shadow">
                {photo.alt}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
