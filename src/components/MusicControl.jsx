import React from 'react'
import { Volume2, VolumeX, Music } from 'lucide-react'

export function MusicControl({ isPlaying, isMuted, toggleMute, hasAudioFile }) {
  if (!hasAudioFile) return null

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
        className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full glass-pill shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 border border-[#E2D1FF] bg-white/80 backdrop-blur-md text-[#7047A5]"
      >
        <div className="flex items-center gap-1">
          {isPlaying && !isMuted ? (
            <div className="flex items-end gap-0.5 h-3.5 w-3.5">
              <span className="w-0.5 bg-[#A875E4] rounded-full animate-[pulse-soft_0.8s_ease-in-out_infinite] h-full" />
              <span className="w-0.5 bg-[#A875E4] rounded-full animate-[pulse-soft_1.2s_ease-in-out_infinite] h-2/3" />
              <span className="w-0.5 bg-[#A875E4] rounded-full animate-[pulse-soft_0.6s_ease-in-out_infinite] h-4/5" />
            </div>
          ) : (
            <Music className="w-3.5 h-3.5 text-[#786E80]" />
          )}
        </div>

        <span className="text-xs font-medium text-[#7047A5] tracking-wide pr-1">
          {isMuted ? 'Muted' : 'Music'}
        </span>

        {isMuted ? (
          <VolumeX className="w-3.5 h-3.5 text-[#786E80] transition-colors" />
        ) : (
          <Volume2 className="w-3.5 h-3.5 text-[#A875E4] transition-colors" />
        )}
      </button>
    </div>
  )
}
