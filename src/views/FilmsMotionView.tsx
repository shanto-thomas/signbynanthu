import { useState } from 'react';
import { CINEMA_FILMS } from '../data/portfolioData';
import { CinemaFilm } from '../types';
import { Play, Award, Film, Disc, Sparkles, Volume2 } from 'lucide-react';

interface FilmsMotionViewProps {
  onOpenFilm: (film: CinemaFilm) => void;
  onNavigateInquire: () => void;
}

export default function FilmsMotionView({ onOpenFilm, onNavigateInquire }: FilmsMotionViewProps) {
  const [selectedFormat, setSelectedFormat] = useState<string>('All');

  const formats = ['All', '4K Cinema', 'Super 16 & Digital', '35mm Celluloid'];

  const filteredFilms = selectedFormat === 'All'
    ? CINEMA_FILMS
    : CINEMA_FILMS.filter((f) => f.format.toLowerCase().includes(selectedFormat.toLowerCase()));

  return (
    <div className="w-full bg-[#0A0A0A] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Screening Room Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#A39274]/40" />
            <span className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.3em] text-[#A39274] font-medium">
              Cinema Theatre
            </span>
            <span className="h-px w-8 bg-[#A39274]/40" />
          </div>
          <h1 className="font-['Playfair_Display'] text-[36px] md:text-[60px] text-white tracking-wide uppercase mb-4">
            Films & Motion
          </h1>
          <p className="font-['EB_Garamond'] text-[22px] text-white/80 italic font-light max-w-2xl mx-auto leading-relaxed">
            "Authentic motion picture film, orchestral scoring, and unscripted documentary storytelling for discerning couples."
          </p>
        </div>

        {/* Featured Premier Film Card */}
        {CINEMA_FILMS[0] && (
          <div
            onClick={() => onOpenFilm(CINEMA_FILMS[0])}
            className="mb-20 bg-white/5 border border-white/15 overflow-hidden group cursor-pointer shadow-2xl relative"
          >
            <div className="aspect-[21/9] md:aspect-[2.35/1] relative overflow-hidden bg-black">
              <img
                src={CINEMA_FILMS[0].coverImage}
                alt={CINEMA_FILMS[0].altText}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Centered Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-white/80 bg-black/40 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black text-white transition-all duration-300">
                  <Play className="w-8 h-8 translate-x-1 fill-current" />
                </div>
              </div>

              {/* Bottom Badge Info */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.25em] text-[#A39274] mb-1 block">
                    Official Feature Release • {CINEMA_FILMS[0].location}
                  </span>
                  <h2 className="font-['Playfair_Display'] text-[28px] md:text-[44px] text-white leading-tight">
                    {CINEMA_FILMS[0].title}
                  </h2>
                  <p className="font-['EB_Garamond'] text-[18px] text-white/80 italic mt-1 max-w-xl">
                    "{CINEMA_FILMS[0].logline}"
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-black/70 border border-white/20 text-[#A39274] font-['DM_Sans'] text-[11px] uppercase tracking-wider">
                    {CINEMA_FILMS[0].duration}
                  </span>
                  <span className="px-3 py-1 bg-black/70 border border-white/20 text-white/90 font-['DM_Sans'] text-[11px] uppercase tracking-wider">
                    {CINEMA_FILMS[0].format}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Format Filter Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 mb-10 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-[#A39274]" />
            <span className="font-['DM_Sans'] text-[11px] uppercase tracking-wider text-white/70">
              Filter by Format:
            </span>
          </div>

          <div className="flex items-center gap-2">
            {formats.map((fmt) => (
              <button
                key={fmt}
                onClick={() => setSelectedFormat(fmt)}
                className={`px-4 py-1.5 rounded-full font-['DM_Sans'] text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                  selectedFormat === fmt
                    ? 'bg-[#A39274] text-black font-semibold'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        {/* Film Catalogue Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredFilms.map((film) => (
            <div
              key={film.id}
              onClick={() => onOpenFilm(film)}
              className="group cursor-pointer bg-white/5 border border-white/15 overflow-hidden flex flex-col justify-between hover:border-[#A39274]/50 transition-all duration-300"
            >
              <div>
                <div className="aspect-video relative overflow-hidden bg-black">
                  <img
                    src={film.coverImage}
                    alt={film.altText}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-white/70 bg-black/40 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 text-white">
                      <Play className="w-5 h-5 translate-x-0.5 fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/80 font-['DM_Sans'] text-[10px] text-[#A39274] uppercase tracking-wider">
                    {film.duration} • {film.location.split(',')[0]}
                  </div>
                </div>

                <div className="p-6">
                  <span className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.2em] text-[#A39274] mb-1 block">
                    {film.format}
                  </span>
                  <h3 className="font-['Playfair_Display'] text-[22px] text-white group-hover:text-[#A39274] transition-colors mb-2">
                    {film.title}
                  </h3>
                  <p className="font-['EB_Garamond'] text-[15px] text-white/70 leading-relaxed mb-4">
                    {film.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-['DM_Sans'] text-white/60">
                <span className="flex items-center gap-1.5 text-[#A39274]">
                  <Disc className="w-3.5 h-3.5" /> Watch Screening
                </span>
                {film.laurels && film.laurels.length > 0 && (
                  <span className="flex items-center gap-1 text-white/50">
                    <Award className="w-3.5 h-3.5 text-[#A39274]" /> Awarded
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Philosophy Banner */}
        <div className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.2em] text-[#A39274] mb-2 font-medium">
                The Optical Suite
              </p>
              <h4 className="font-['Playfair_Display'] text-[24px] text-white mb-2">
                Vintage Glass & Anamorphic
              </h4>
              <p className="font-['EB_Garamond'] text-[16px] text-white/70 leading-relaxed">
                We pair high-resolution digital sensors with vintage Cooke Speed Panchro and Leica R lenses, creating creamy bokeh, gentle flare falloff, and organic skin tones.
              </p>
            </div>

            <div>
              <p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.2em] text-[#A39274] mb-2 font-medium">
                Analog Motion Stock
              </p>
              <h4 className="font-['Playfair_Display'] text-[24px] text-white mb-2">
                Kodak Vision3 Super 16
              </h4>
              <p className="font-['EB_Garamond'] text-[16px] text-white/70 leading-relaxed">
                Real photochemical reaction. Each second is 24 distinct frames of exposed celluloid, preserved through 4K film scanner telecine transfers in London and Paris laboratories.
              </p>
            </div>

            <div>
              <p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.2em] text-[#A39274] mb-2 font-medium">
                Sound Design & Scoring
              </p>
              <h4 className="font-['Playfair_Display'] text-[24px] text-white mb-2">
                Bespoke Acoustic Masters
              </h4>
              <p className="font-['EB_Garamond'] text-[16px] text-white/70 leading-relaxed">
                No generic royalty music loops. We collaborate with live string quartets, classical guitarists, and ambient synthesists to compose an original score that belongs only to your story.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-['EB_Garamond'] text-[17px] text-white/80 italic">
              "We preserve memories as timeless celluloid poetry."
            </p>
            <button
              onClick={onNavigateInquire}
              className="px-6 py-2.5 bg-[#A39274] text-black font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-colors cursor-pointer font-medium"
            >
              Inquire for Cinema Representation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
