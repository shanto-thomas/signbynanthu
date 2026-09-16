import { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Award, Film, Music } from 'lucide-react';
import { CinemaFilm } from '../types';

interface VideoPlayerModalProps {
  film: CinemaFilm | null;
  onClose: () => void;
}

export default function VideoPlayerModal({ film, onClose }: VideoPlayerModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    if (!film) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Simulate playback timeline
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 300);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if (interval) clearInterval(interval);
    };
  }, [film, isPlaying, onClose]);

  if (!film) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/95 backdrop-blur-lg p-4 md:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Close Film Theatre"
      >
        <X className="w-5 h-5" />
      </button>

      <div
        className="relative max-w-5xl w-full bg-[#111111] border border-white/15 overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Screening Frame */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          <img
            src={film.coverImage}
            alt={film.altText}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isPlaying ? 'scale-105 filter contrast-105' : 'scale-100 opacity-90'
            }`}
          />

          {/* Cinematic Letterbox Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* Film Grain & Aspect Ratio Mask */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-[#A39274] font-['DM_Sans'] text-[10px] uppercase tracking-widest border border-white/10">
              {film.format}
            </span>
            <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-white/80 font-['DM_Sans'] text-[10px] uppercase tracking-widest">
              {film.duration}
            </span>
          </div>

          {/* Interactive Play/Pause center overlay when paused */}
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                <Play className="w-8 h-8 translate-x-0.5 fill-black" />
              </div>
            </button>
          )}

          {/* Video Control Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2">
            {/* Scrubber */}
            <div
              className="w-full h-1.5 bg-white/20 hover:h-2 transition-all rounded-full cursor-pointer relative"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickPos = (e.clientX - rect.left) / rect.width;
                setProgress(clickPos * 100);
              }}
            >
              <div
                className="h-full bg-[#A39274] rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between pt-2 text-white">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#A39274] transition-colors cursor-pointer"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-[#A39274] transition-colors cursor-pointer"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <span className="font-['DM_Sans'] text-[11px] text-white/70">
                  {Math.floor((progress / 100) * 11)}:
                  {String(Math.floor(((progress / 100) * 660) % 60)).padStart(2, '0')} / {film.duration}
                </span>
              </div>

              <span className="font-['DM_Sans'] text-[11px] uppercase tracking-widest text-[#A39274]">
                Master Reel • Super 16 & Digital
              </span>
            </div>
          </div>
        </div>

        {/* Film Context & Director's Dossier */}
        <div className="p-6 md:p-8 bg-[#111111] text-white border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#A39274] mb-1">
                {film.location}
              </p>
              <h3 className="font-['Playfair_Display'] text-[26px] md:text-[32px] text-white mb-2">
                {film.title}
              </h3>
              <p className="font-['EB_Garamond'] text-[18px] text-white/90 italic mb-4">
                "{film.logline}"
              </p>
              <p className="font-['EB_Garamond'] text-[15px] text-white/70 leading-relaxed">
                {film.directorNote}
              </p>
            </div>

            {/* Awards & Score Credits */}
            <div className="flex flex-col gap-4 min-w-[240px] pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-6">
              {film.laurels && film.laurels.length > 0 && (
                <div>
                  <p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.2em] text-[#A39274] mb-2 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>Official Honors</span>
                  </p>
                  <ul className="space-y-1.5 font-['DM_Sans'] text-[12px] text-white/80">
                    {film.laurels.map((laurel, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#A39274]" />
                        <span>{laurel}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.2em] text-[#A39274] mb-1 flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5" />
                  <span>Soundtrack & Score</span>
                </p>
                <p className="font-['EB_Garamond'] text-[14px] text-white/70 italic">
                  {film.scoreCredit}
                </p>
              </div>

              <div>
                <p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.2em] text-[#A39274] mb-1 flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5" />
                  <span>Delivery Format</span>
                </p>
                <p className="font-['DM_Sans'] text-[12px] text-white/70">
                  4K HDR Master, 16mm Analog Scans, Archival Wooden Flash Reel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
