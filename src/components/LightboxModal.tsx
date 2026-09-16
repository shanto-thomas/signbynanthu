import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Film, MapPin } from 'lucide-react';
import { PhotoVignette } from '../types';

interface LightboxModalProps {
  currentPhoto: PhotoVignette | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export default function LightboxModal({
  currentPhoto,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev
}: LightboxModalProps) {
  useEffect(() => {
    if (!currentPhoto) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [currentPhoto, onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!currentPhoto) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/95 backdrop-blur-md p-4 sm:p-6 md:p-10 transition-opacity"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Navigation arrows */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
          aria-label="Previous photograph"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
          aria-label="Next photograph"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Content Box */}
      <div 
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row items-stretch bg-[#141414] border border-white/15 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo Canvas */}
        <div className="flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[350px] md:min-h-[500px]">
          <img
            src={currentPhoto.imageUrl}
            alt={currentPhoto.altText}
            className="w-full h-full max-h-[80vh] object-contain select-none"
          />
        </div>

        {/* Archival Metadata Sidebar */}
        <div className="w-full md:w-80 p-6 md:p-8 flex flex-col justify-between bg-[#111111] text-white border-t md:border-t-0 md:border-l border-white/10 shrink-0">
          <div>
            <div className="flex items-center justify-between text-[#A39274] font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] mb-3">
              <span>{currentPhoto.figureNumber || 'Atelier Archive'}</span>
              <span className="px-2 py-0.5 rounded-full border border-[#A39274]/40 text-[10px]">
                {currentPhoto.category}
              </span>
            </div>

            <h3 className="font-['Playfair_Display'] text-[24px] text-[#F9F7F2] leading-tight mb-2">
              {currentPhoto.title}
            </h3>

            <div className="flex items-center gap-1.5 text-white/70 font-['DM_Sans'] text-[12px] mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#A39274]" />
              <span>{currentPhoto.location}</span>
            </div>

            {currentPhoto.caption && (
              <p className="font-['EB_Garamond'] text-[16px] text-white/80 italic leading-relaxed border-l-2 border-[#A39274] pl-3 py-1 mb-6">
                "{currentPhoto.caption}"
              </p>
            )}

            {/* Technical Emulsion Data */}
            <div className="space-y-3 pt-4 border-t border-white/10 text-white/60 font-['DM_Sans'] text-[11px]">
              {currentPhoto.filmStock && (
                <div className="flex items-center gap-2">
                  <Film className="w-3.5 h-3.5 text-[#A39274]" />
                  <span>Emulsion: <strong className="text-white/90 font-medium">{currentPhoto.filmStock}</strong></span>
                </div>
              )}
              {currentPhoto.camera && (
                <div className="flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5 text-[#A39274]" />
                  <span>Optics: <strong className="text-white/90 font-medium">{currentPhoto.camera}</strong></span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-['DM_Sans'] text-white/40 uppercase tracking-wider">
            <span>Hand-Archived Scan</span>
            <span>300 DPI Fine Art</span>
          </div>
        </div>
      </div>
    </div>
  );
}
