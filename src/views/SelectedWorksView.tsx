import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Grid, Play, Shield, Globe, Award, Sparkles, Filter } from 'lucide-react';
import { CURATED_VIGNETTES, STORIES_DATA, CINEMA_FILMS, EDITORIAL_PRESS, HERO_ASSETS } from '../data/portfolioData';
import { PhotoVignette, CinemaFilm, NavigationTab, LoveStory } from '../types';

interface SelectedWorksViewProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenPhoto: (photo: PhotoVignette) => void;
  onOpenFilm: (film: CinemaFilm) => void;
  onOpenStory: (story: LoveStory) => void;
  onOpenLookbook: () => void;
}

export default function SelectedWorksView({
  onSelectTab,
  onOpenPhoto,
  onOpenFilm,
  onOpenStory,
  onOpenLookbook,
}: SelectedWorksViewProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterCategories = [
    'All',
    'Como & Amalfi',
    'Parisian Salons',
    'Rajasthan Palaces',
    'Analog 35mm',
    'Monochrome'
  ];

  const filteredVignettes = selectedFilter === 'All'
    ? CURATED_VIGNETTES
    : CURATED_VIGNETTES.filter((item) => item.category === selectedFilter);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Cinematic Full-Bleed Hero */}
      <section className="relative w-full -mt-16 sm:-mt-20 h-screen min-h-[580px] sm:min-h-[640px] flex items-end justify-start overflow-hidden bg-[#0A0A0A]">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-85 transition-transform duration-1000 ease-out scale-100 hover:scale-105"
          style={{ backgroundImage: `url('${HERO_ASSETS.heroBg}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/35 to-[#0A0A0A]/20 pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pb-10 sm:pb-16 md:pb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-['DM_Sans'] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#A39274] mb-2 font-medium">
              Atelier of Visual Poetry
            </p>
            <h1 className="font-['Playfair_Display'] text-[34px] xs:text-[40px] sm:text-[52px] md:text-[68px] text-white font-normal tracking-tight leading-[1.05] mb-3">
              Sign by Nanthu
            </h1>
            <p className="font-['EB_Garamond'] text-[18px] sm:text-[22px] md:text-[24px] text-[#eae8e3]/90 italic font-light max-w-lg leading-relaxed">
              Unscripted romance, timeless celluloid memory, and haute-couture editorial cinema.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex items-center gap-2 text-[#eae8e3]">
              <span className="font-['DM_Sans'] text-[11px] uppercase tracking-widest text-[#A39274] font-medium">
                Worldwide Commissions
              </span>
              <span className="w-2 h-2 rounded-full bg-[#A39274] animate-pulse" />
            </div>
            <a
              href="#manifesto"
              className="inline-flex items-center gap-2 font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-white hover:text-[#A39274] transition-colors group"
            >
              <span>Scroll to Explore</span>
              <span className="text-[18px] group-hover:translate-y-1 transition-transform">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Brand Statement / Manifesto */}
      <section className="w-full bg-[#fbf9f4] py-24" id="manifesto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Asymmetrical Left Portrait */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div 
                onClick={() => onOpenPhoto(CURATED_VIGNETTES[0])}
                className="relative group overflow-hidden bg-[#f0eee9] shadow-sm cursor-pointer border border-[#E5E1D8]"
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    src={HERO_ASSETS.manifestoLeft}
                    alt="Editorial candid close-up of bride with fine art film aesthetic"
                  />
                </div>
                <div className="p-4 bg-[#f5f3ee] flex justify-between items-baseline">
                  <span className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-[#747878]">
                    Fig. 01 / Heritage
                  </span>
                  <span className="font-['EB_Garamond'] text-[15px] text-[#1b1c19] italic">
                    The Adornment
                  </span>
                </div>
              </div>
            </div>

            {/* Typography Center Piece */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center px-0 lg:px-6 text-center lg:text-left">
              <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#A39274] mb-3 font-medium">
                Our Manifesto
              </p>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[44px] text-[#1b1c19] uppercase tracking-wide leading-tight mb-6">
                A Modern Approach <br />
                <span className="font-['EB_Garamond'] text-[24px] md:text-[32px] lowercase italic text-[#A39274] block -mt-1 md:-mt-2 font-normal">
                  to an
                </span>
                Age Old Tradition
              </h2>
              <p className="font-['EB_Garamond'] text-[18px] text-[#2D2D2D] leading-relaxed mb-6">
                We celebrate the quiet, sacred nuances that exist between grand gestures. Documenting discerning weddings across Lake Como, the cliffs of Amalfi, historic Parisian salons, and regal palaces of Rajasthan—we craft heirloom visuals imbued with the tactile richness of 35mm film and modern cinematic cadence.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-6 pt-2">
                <button
                  onClick={() => onSelectTab('about-and-philosophy')}
                  className="inline-flex items-center gap-2 font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-[#0A0A0A] hover:text-[#A39274] transition-colors font-medium cursor-pointer"
                >
                  <span>Read The Philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Asymmetrical Right Landscape Portrait */}
            <div className="lg:col-span-3 order-3">
              <div 
                onClick={() => onOpenStory(STORIES_DATA[0])}
                className="relative group overflow-hidden bg-[#f0eee9] shadow-sm mt-0 lg:-mt-12 cursor-pointer border border-[#E5E1D8]"
              >
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    src={HERO_ASSETS.manifestoRight}
                    alt="Lake Como scenic wedding editorial"
                  />
                </div>
                <div className="p-4 bg-[#f5f3ee] flex justify-between items-baseline">
                  <span className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-[#747878]">
                    Villa Sola Cabiati
                  </span>
                  <span className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-[#6c5c3f] font-semibold">
                    Como
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Accolades & Press Strip */}
          <div className="mt-24 pt-12 border-t border-[#E5E1D8]">
            <p className="text-center font-['DM_Sans'] text-[11px] uppercase tracking-[0.25em] text-[#747878] mb-8 font-medium">
              Featured & Celebrated Across Global Publications
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity px-6">
              {['VOGUE', 'BRIDES', "HARPER'S BAZAAR", 'ELLE LUXE', 'WEDLUXE', 'KINFOLK'].map((press) => (
                <button
                  key={press}
                  onClick={() => onSelectTab('journal')}
                  className="font-['Playfair_Display'] text-[20px] md:text-[24px] tracking-widest uppercase hover:text-[#A39274] transition-colors cursor-pointer"
                >
                  {press}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Iconic Moments Curated Mosaic Grid */}
      <section className="w-full bg-[#F9F7F2] py-24 border-t border-b border-[#E5E1D8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#A39274] mb-2 font-medium">
                The Archive Portfolio
              </p>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[44px] text-[#1b1c19]">
                Curated Vignettes
              </h2>
            </div>
            <p className="font-['EB_Garamond'] text-[16px] text-[#444748] max-w-sm leading-relaxed">
              A rhythmic mosaic of fleeting glances, unbridled euphoria, architectural scale, and heirloom family treasures.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-nowrap scrollbar-none">
            <div className="flex items-center gap-1.5 text-[#747878] font-['DM_Sans'] text-[11px] uppercase tracking-wider mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-1.5 rounded-full font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-black text-white shadow'
                    : 'bg-[#f0eee9] text-[#444748] hover:bg-[#E5E1D8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 15-Panel HOTC-Style Mosaic Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
            {filteredVignettes.map((vignette, index) => {
              // Insert the iconic typography box at index 7 if "All" is active
              const isAccentBox = selectedFilter === 'All' && index === 7;

              return (
                <div key={vignette.id} className="contents">
                  {isAccentBox && (
                    <div className="aspect-[4/5] bg-[#eae8e3] flex flex-col items-center justify-center p-4 text-center border border-[#E5E1D8] select-none">
                      <span className="font-['EB_Garamond'] text-[22px] italic text-[#747878] mb-1">
                        some of the most
                      </span>
                      <h3 className="font-['Playfair_Display'] text-[24px] md:text-[30px] tracking-wider uppercase text-[#0A0A0A]">
                        "ICONIC"
                      </h3>
                      <span className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.2em] text-[#A39274] mt-1 font-semibold">
                        wedding frames
                      </span>
                    </div>
                  )}

                  <div
                    onClick={() => onOpenPhoto(vignette)}
                    className="aspect-[4/5] overflow-hidden group bg-[#f0eee9] relative cursor-pointer"
                  >
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      src={vignette.imageUrl}
                      alt={vignette.altText}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
                      <span className="font-['DM_Sans'] text-[9px] uppercase tracking-widest text-[#A39274]">
                        {vignette.location}
                      </span>
                      <p className="font-['Playfair_Display'] text-[13px] truncate">
                        {vignette.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onSelectTab('stories-and-editorial')}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#000000] text-white font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] hover:bg-[#A39274] hover:text-black transition-all duration-300 cursor-pointer"
            >
              <span>Explore Entire Visual Archive (400+ Stories)</span>
              <Grid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Featured Love Stories (Curated Case Studies) */}
      <section className="w-full bg-[#fbf9f4] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-[#E5E1D8]">
            <div>
              <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#A39274] mb-2 font-medium">
                Curated Monographs
              </p>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[44px] text-[#1b1c19]">
                Selected Stories
              </h2>
            </div>
            <p className="font-['EB_Garamond'] text-[20px] italic text-[#747878] mt-2 md:mt-0">
              "Every couple is an entirely unique cinematic universe."
            </p>
          </div>

          {/* Story 1: 3-Column Editorial Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-20 items-start">
            {STORIES_DATA.slice(1, 4).map((story, idx) => (
              <div
                key={story.id}
                onClick={() => onOpenStory(story)}
                className={`md:col-span-4 group cursor-pointer ${idx === 1 ? 'mt-0 md:-mt-8' : ''}`}
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#f0eee9] shadow-sm mb-4 border border-[#E5E1D8]">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    src={story.coverImage}
                    alt={story.altText}
                  />
                </div>
                <span className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#747878]">
                  {story.date}
                </span>
                <h3 className="font-['Playfair_Display'] text-[24px] text-[#1b1c19] group-hover:text-[#A39274] transition-colors mt-1">
                  {story.couple}
                </h3>
                <p className="font-['EB_Garamond'] text-[16px] text-[#444748] italic">
                  {story.location}
                </p>
              </div>
            ))}
          </div>

          {/* Story 2: Featured Full Spread Asymmetry */}
          {STORIES_DATA[0] && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#f5f3ee] p-6 lg:p-12 rounded-sm border border-[#E5E1D8]">
              <div className="lg:col-span-7">
                <div
                  onClick={() => onOpenStory(STORIES_DATA[0])}
                  className="aspect-[16/10] overflow-hidden shadow-sm group cursor-pointer"
                >
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    src={STORIES_DATA[0].coverImage}
                    alt={STORIES_DATA[0].altText}
                  />
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#A39274] mb-2 font-medium">
                  Featured Monograph
                </span>
                <h3 className="font-['Playfair_Display'] text-[28px] md:text-[34px] text-[#1b1c19] mb-2">
                  {STORIES_DATA[0].couple}
                </h3>
                <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#747878] mb-4 font-medium">
                  {STORIES_DATA[0].location} • {STORIES_DATA[0].date}
                </p>
                <p className="font-['EB_Garamond'] text-[16px] text-[#444748] mb-6 leading-relaxed">
                  {STORIES_DATA[0].teaser}
                </p>
                <div>
                  <button
                    onClick={() => onOpenStory(STORIES_DATA[0])}
                    className="inline-flex items-center gap-2 font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-black hover:text-[#A39274] transition-colors font-medium cursor-pointer"
                  >
                    <span>View Full Monograph & Film ({STORIES_DATA[0].framesCount} Frames)</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. "Soul & Cinema" / Motion Stills (High-Contrast Velvet Black Section) */}
      <section className="w-full bg-[#0A0A0A] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Dark Header Titleplate */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#A39274]/40" />
              <span className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.3em] text-[#A39274] font-medium">
                Moving Images
              </span>
              <span className="h-px w-8 bg-[#A39274]/40" />
            </div>
            <h2 className="font-['Playfair_Display'] text-[32px] md:text-[56px] tracking-widest uppercase mb-3 text-white">
              SOUL + CINEMA
            </h2>
            <p className="font-['EB_Garamond'] text-[22px] text-white/80 italic font-light">
              "We do not document events; we preserve the fleeting pulse of human connection."
            </p>
          </div>

          {/* Film Festival Laurels */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 pb-12 border-b border-white/15 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-[#A39274]/50 flex items-center justify-center mb-2">
                <Award className="text-[#A39274] w-5 h-5" />
              </div>
              <p className="font-['DM_Sans'] text-[11px] uppercase tracking-wider text-white">
                Cannes Indie Shorts
              </p>
              <p className="font-['DM_Sans'] text-[11px] text-[#A39274]">
                Best Wedding Documentary
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-[#A39274]/50 flex items-center justify-center mb-2">
                <Play className="text-[#A39274] w-5 h-5" />
              </div>
              <p className="font-['DM_Sans'] text-[11px] uppercase tracking-wider text-white">
                WedAwards 2024
              </p>
              <p className="font-['DM_Sans'] text-[11px] text-[#A39274]">
                Filmmaker of the Year
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-[#A39274]/50 flex items-center justify-center mb-2">
                <Sparkles className="text-[#A39274] w-5 h-5" />
              </div>
              <p className="font-['DM_Sans'] text-[11px] uppercase tracking-wider text-white">
                Platinum Film Club
              </p>
              <p className="font-['DM_Sans'] text-[11px] text-[#A39274]">
                Direction & Score Gold
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-[#A39274]/50 flex items-center justify-center mb-2">
                <Shield className="text-[#A39274] w-5 h-5" />
              </div>
              <p className="font-['DM_Sans'] text-[11px] uppercase tracking-wider text-white">
                International Guild
              </p>
              <p className="font-['DM_Sans'] text-[11px] text-[#A39274]">
                Excellence in Cinematography
              </p>
            </div>
          </div>

          {/* Feature Films Pair */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {CINEMA_FILMS.slice(0, 2).map((film) => (
              <div
                key={film.id}
                onClick={() => onOpenFilm(film)}
                className="flex flex-col group cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden bg-white/5 border border-white/15 mb-3">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    src={film.coverImage}
                    alt={film.altText}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-white/80 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-white group-hover:text-black text-white transition-all duration-300">
                      <Play className="w-7 h-7 translate-x-0.5 fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/70 backdrop-blur-sm text-white/90 font-['DM_Sans'] text-[10px] uppercase tracking-wider border border-white/10">
                    {film.duration} • {film.format}
                  </div>
                </div>
                <h3 className="font-['Playfair_Display'] text-[24px] text-white group-hover:text-[#A39274] transition-colors">
                  {film.title}
                </h3>
                <p className="font-['EB_Garamond'] text-[16px] text-white/70 mt-1 leading-relaxed">
                  {film.summary}
                </p>
              </div>
            ))}
          </div>

          {/* Secondary Video Stills Mosaic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CINEMA_FILMS.slice(2, 6).map((film) => (
              <div
                key={film.id}
                onClick={() => onOpenFilm(film)}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] relative overflow-hidden bg-white/5 mb-2 border border-white/15">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-75 group-hover:opacity-100"
                    src={film.coverImage}
                    alt={film.altText}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center bg-black/40 group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 text-white fill-white translate-x-0.5" />
                    </div>
                  </div>
                </div>
                <p className="font-['DM_Sans'] text-[11px] uppercase tracking-wider text-white/80 group-hover:text-[#A39274] transition-colors">
                  {film.title} • {film.location.split(',')[0]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => onSelectTab('films-and-motion')}
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#A39274] text-[#A39274] hover:bg-[#A39274] hover:text-black font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] transition-all duration-300 cursor-pointer"
            >
              <span>View Cinema Reel Archive (35+ Films)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. The Art & Philosophy / Behind the Lens */}
      <section className="w-full bg-[#fbf9f4] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Studio Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-[#f0eee9] shadow-md overflow-hidden relative border border-[#E5E1D8]">
                <img
                  className="w-full h-full object-cover"
                  src={HERO_ASSETS.directorPortrait}
                  alt="Atmospheric artistic portrait of studio directors holding Leica M camera"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block p-6 bg-[#F9F7F2] border border-[#E5E1D8] shadow-sm max-w-xs">
                <p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.2em] text-[#747878]">
                  Lead Visual Direction
                </p>
                <p className="font-['Playfair_Display'] text-[20px] text-[#0A0A0A] mt-1 font-semibold">
                  Nanthu & Atelier
                </p>
                <p className="font-['EB_Garamond'] text-[14px] text-[#444748] italic">
                  Founders, Sign by Nanthu
                </p>
              </div>
            </div>

            {/* Right: Philosophy Text & Statistics */}
            <div className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-10">
              <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#A39274] mb-2 font-medium">
                The Approach
              </p>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[44px] text-[#1b1c19] leading-tight mb-6">
                Unobtrusive observation.<br />
                Uncompromising art.
              </h2>
              <p className="font-['EB_Garamond'] text-[18px] text-[#2D2D2D] leading-relaxed mb-4">
                We operate without artificial posing drills or intrusive camera rigs. Over a decade of capturing the world's most intimate unions has taught us that genuine elegance is discovered in between formal stages—when a father lets down his guard, or when lovers share a breathless second away from the multitude.
              </p>
              <p className="font-['EB_Garamond'] text-[24px] text-[#6c5c3f] italic font-light mb-8">
                "Light is our brush; emotion is our permanence."
              </p>

              {/* Studio Milestones Matrix */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#E5E1D8]">
                <div>
                  <p className="font-['Playfair_Display'] text-[32px] md:text-[44px] text-[#0A0A0A]">
                    12<span className="text-[#A39274]">+</span>
                  </p>
                  <p className="font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878] mt-1 font-medium">
                    Years of Craft
                  </p>
                </div>
                <div>
                  <p className="font-['Playfair_Display'] text-[32px] md:text-[44px] text-[#0A0A0A]">
                    42
                  </p>
                  <p className="font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878] mt-1 font-medium">
                    Countries Documented
                  </p>
                </div>
                <div>
                  <p className="font-['Playfair_Display'] text-[32px] md:text-[44px] text-[#0A0A0A]">
                    28
                  </p>
                  <p className="font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878] mt-1 font-medium">
                    International Laurels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Magazine Covers & Global Editorial Presence */}
      <section className="w-full bg-[#F9F7F2] py-24 border-t border-[#E5E1D8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#A39274] mb-2 font-medium">
              In Print & On Newsstands
            </p>
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[36px] text-[#1b1c19]">
              Editorial Features
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {EDITORIAL_PRESS.map((press) => (
              <div
                key={press.id}
                onClick={() => onSelectTab('journal')}
                className="aspect-[3/4] bg-[#f0eee9] overflow-hidden group shadow-sm cursor-pointer border border-[#E5E1D8] relative"
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={press.coverImage}
                  alt={press.altText}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                  <span className="font-['DM_Sans'] text-[9px] uppercase tracking-widest text-[#A39274]">
                    {press.publication}
                  </span>
                  <p className="font-['EB_Garamond'] text-[13px] leading-tight line-clamp-2">
                    {press.headline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Seamless Inquiry / Bookings Banner */}
      <section className="w-full bg-[#eae8e3] py-24 border-t border-[#E5E1D8]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.25em] text-[#A39274] mb-2 font-medium">
            Private Commissions
          </p>
          <h2 className="font-['Playfair_Display'] text-[28px] md:text-[44px] text-[#1b1c19] mb-3">
            Limited Global Engagements for 2025 & 2026
          </h2>
          <p className="font-['EB_Garamond'] text-[18px] text-[#444748] max-w-2xl mx-auto mb-8 leading-relaxed">
            To preserve artistic dedication and bespoke cinematic storytelling, our atelier accepts a strictly limited calendar of twenty destination commissions annually worldwide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                onSelectTab('inquire-and-book');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#000000] text-white font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] hover:bg-[#A39274] hover:text-black transition-all duration-300 font-medium cursor-pointer"
            >
              <span>Check Date Availability</span>
            </button>
            <button
              onClick={onOpenLookbook}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-[#0A0A0A] text-[#0A0A0A] font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 font-medium cursor-pointer"
            >
              <span>Download 2025 Atelier Lookbook</span>
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-[#747878] font-['DM_Sans'] text-[12px]">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#A39274]" /> Encrypted & Confidential
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#A39274]" /> Worldwide Travel Included
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
