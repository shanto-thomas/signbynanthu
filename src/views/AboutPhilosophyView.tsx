import { HERO_ASSETS } from '../data/portfolioData';
import { Camera, Film, MapPin, Award, HeartHandshake, Eye, Sparkles } from 'lucide-react';

interface AboutPhilosophyViewProps {
  onNavigateInquire: () => void;
  onOpenLookbook: () => void;
}

export default function AboutPhilosophyView({
  onNavigateInquire,
  onOpenLookbook,
}: AboutPhilosophyViewProps) {
  const principles = [
    {
      icon: Eye,
      title: 'Unobtrusive Observation',
      description:
        'We never ask you to perform or freeze into unnatural postures. True elegance happens naturally in the space between choreographed events.'
    },
    {
      icon: Film,
      title: 'Photochemical Permanence',
      description:
        'We actively expose 16mm and 35mm motion picture negative films. The chemical depth, grain, and warmth outlives shifting digital trends.'
    },
    {
      icon: HeartHandshake,
      title: 'Strictly 20 Commissions',
      description:
        'To ensure direct personal engagement and meticulous post-production, our directors never double-book dates or delegate to anonymous sub-crews.'
    },
    {
      icon: Sparkles,
      title: 'Haute-Couture Nuance',
      description:
        'Inspired by European editorial cinema, Parisian ateliers, and classic fine-art portraiture. Every image is composed with museum-grade balance.'
    }
  ];

  const gear = [
    { name: 'Arriflex 416 & Bolex H16', role: '16mm Analog Motion Picture' },
    { name: 'Leica M11 & Leica MP 35mm', role: 'Rangefinder Candid Precision' },
    { name: 'Hasselblad 500 C/M & Contax 645', role: 'Large Format Editorial Stills' },
    { name: 'Arri Alexa Mini LF & Prime Glass', role: '4K Large-Format Cinema Master' }
  ];

  return (
    <div className="w-full bg-[#fbf9f4] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.25em] text-[#A39274] mb-2 font-medium">
            Atelier Ethos
          </p>
          <h1 className="font-['Playfair_Display'] text-[36px] md:text-[56px] text-[#1b1c19] leading-tight mb-4">
            About & Philosophy
          </h1>
          <p className="font-['EB_Garamond'] text-[22px] text-[#6c5c3f] italic font-light leading-relaxed">
            "We believe that wedding cinema should feel like an heirloom art piece, not a corporate marketing sizzle reel."
          </p>
        </div>

        {/* Founders Portrait & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] bg-[#f0eee9] shadow-lg overflow-hidden border border-[#E5E1D8]">
              <img
                src={HERO_ASSETS.directorPortrait}
                alt="Founders of Sign by Nanthu Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-[#f5f3ee] border border-[#E5E1D8] mt-4 flex items-center justify-between">
              <div>
                <h4 className="font-['Playfair_Display'] text-[18px] text-[#1b1c19]">
                  Nanthu & Creative Atelier
                </h4>
                <p className="font-['EB_Garamond'] text-[14px] text-[#747878] italic">
                  Founders & Creative Direction
                </p>
              </div>
              <span className="font-['DM_Sans'] text-[10px] uppercase tracking-wider text-[#A39274] border border-[#A39274]/40 px-2 py-0.5">
                Paris & Lake Como
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#A39274] mb-2 font-medium">
              The Founders' Vision
            </p>
            <h2 className="font-['Playfair_Display'] text-[28px] md:text-[40px] text-[#1b1c19] leading-tight mb-6">
              Twelve years of quiet devotion to human emotion.
            </h2>
            <div className="space-y-4 font-['EB_Garamond'] text-[18px] text-[#2D2D2D] leading-relaxed">
              <p>
                Sign by Nanthu was founded with a dedicated focus on uniting documentary truth with high-fashion editorial filmmaking and fine-art photography.
              </p>
              <p>
                Frustrated by the loud, robotic formulas dominating commercial wedding videography—with drones hovering noisily over sacred vows and rigid posing rehearsals—they set out to pioneer an atelier model rooted in quiet discretion and analog celluloid.
              </p>
              <p>
                Today, our studio operates from residences in Lake Como and Paris, documenting celebrations across 42 countries. We remain deliberately small, giving every commissioned couple our undivided creative focus.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onOpenLookbook}
                className="px-6 py-3 bg-black text-white hover:bg-[#A39274] hover:text-black font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] transition-colors rounded-sm cursor-pointer"
              >
                Read Atelier Dossier
              </button>
              <button
                onClick={onNavigateInquire}
                className="px-6 py-3 border border-black text-black hover:bg-black hover:text-white font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] transition-colors rounded-sm cursor-pointer"
              >
                Inquire For 2025/2026
              </button>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#A39274] mb-2 font-medium">
              Guiding Principles
            </p>
            <h3 className="font-['Playfair_Display'] text-[28px] md:text-[38px] text-[#1b1c19]">
              How We Work With You
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-[#f5f3ee] border border-[#E5E1D8] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-[#eae8e3] border border-[#A39274]/30 flex items-center justify-center text-[#A39274] mb-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-['Playfair_Display'] text-[20px] text-[#1b1c19] mb-3">
                      {p.title}
                    </h4>
                    <p className="font-['EB_Garamond'] text-[16px] text-[#444748] leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <span className="font-['DM_Sans'] text-[10px] text-[#A39274] tracking-widest mt-6 block">
                    0{idx + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Equipment & Process Suite */}
        <div className="p-8 md:p-12 bg-[#eae8e3] border border-[#E5E1D8] mb-24 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#A39274] mb-2 font-medium">
                Photochemical Chemistry
              </p>
              <h3 className="font-['Playfair_Display'] text-[28px] md:text-[36px] text-[#1b1c19] mb-4 leading-tight">
                Authentic 35mm & 16mm Celluloid
              </h3>
              <p className="font-['EB_Garamond'] text-[17px] text-[#2D2D2D] leading-relaxed mb-6">
                Unlike digital sensors that record sterile numeric data, motion picture film captures light through crystalline silver halide grains. The result is glowing highlights, delicate skin gradients, and an emotional patina that only time and chemistry can achieve.
              </p>
              <div className="space-y-3">
                {gear.map((g, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-[#E5E1D8] pb-2 text-[14px]">
                    <span className="font-['DM_Sans'] text-[#1b1c19] font-medium">{g.name}</span>
                    <span className="font-['EB_Garamond'] text-[#747878] italic">{g.role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] bg-black/10 overflow-hidden shadow-sm border border-[#E5E1D8]">
                <img
                  src={HERO_ASSETS.manifestoLeft}
                  alt="Fine art wedding bride film still"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Global Residencies & Travel */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#A39274] mb-2 font-medium">
            Seamless Global Operations
          </p>
          <h3 className="font-['Playfair_Display'] text-[32px] md:text-[40px] text-[#1b1c19] mb-4">
            Worldwide Residencies
          </h3>
          <p className="font-['EB_Garamond'] text-[18px] text-[#444748] leading-relaxed mb-8 max-w-2xl mx-auto">
            Our atelier maintains regular travel circuits across Western Europe, the Mediterranean, South Asia, and the Americas. International travel, logistics, and carnets are handled entirely in-house.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {['Paris', 'Lake Como', 'Mumbai', 'New York', 'Kyoto', 'London'].map((city) => (
              <div key={city} className="p-4 bg-[#f5f3ee] border border-[#E5E1D8] rounded-sm">
                <MapPin className="w-4 h-4 text-[#A39274] mx-auto mb-2" />
                <p className="font-['DM_Sans'] text-[12px] uppercase tracking-wider font-semibold text-[#1b1c19]">
                  {city}
                </p>
                <p className="font-['EB_Garamond'] text-[13px] text-[#747878] italic">Atelier Hub</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
