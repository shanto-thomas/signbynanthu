import { useState } from 'react';
import { STORIES_DATA } from '../data/portfolioData';
import { LoveStory, PhotoVignette } from '../types';
import { ArrowLeft, Sparkles, BookOpen, Film, MapPin, Calendar, Heart } from 'lucide-react';

interface StoriesEditorialViewProps {
  onOpenPhoto: (photo: PhotoVignette) => void;
  selectedStory: LoveStory | null;
  onSelectStory: (story: LoveStory | null) => void;
  onNavigateInquire: () => void;
}

export default function StoriesEditorialView({
  onOpenPhoto,
  selectedStory,
  onSelectStory,
  onNavigateInquire,
}: StoriesEditorialViewProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const destinations = ['All', 'Lake Como', 'Tuscany', 'Rajasthan', 'French Riviera'];

  const filteredStories = activeFilter === 'All'
    ? STORIES_DATA
    : STORIES_DATA.filter((story) => story.location.toLowerCase().includes(activeFilter.toLowerCase()));

  // Detailed Monograph Reader View
  if (selectedStory) {
    return (
      <div className="w-full bg-[#fbf9f4] py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Back button */}
          <button
            onClick={() => onSelectStory(null)}
            className="inline-flex items-center gap-2 font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-[#747878] hover:text-[#1b1c19] mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Monographs</span>
          </button>

          {/* Monograph Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.25em] text-[#A39274] font-medium block mb-2">
              Curated Monograph
            </span>
            <h1 className="font-['Playfair_Display'] text-[36px] md:text-[56px] text-[#1b1c19] leading-tight mb-4">
              {selectedStory.couple}
            </h1>
            <p className="font-['EB_Garamond'] text-[24px] text-[#6c5c3f] italic font-light mb-4">
              {selectedStory.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-[#747878] font-['DM_Sans'] text-[12px] border-y border-[#E5E1D8] py-3 max-w-xl mx-auto">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#A39274]" /> {selectedStory.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#A39274]" /> {selectedStory.date}
              </span>
              {selectedStory.filmFormat && (
                <span className="flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5 text-[#A39274]" /> {selectedStory.filmFormat}
                </span>
              )}
            </div>
          </div>

          {/* Hero Spread Cover */}
          <div className="aspect-[16/9] w-full overflow-hidden mb-12 bg-black/5 shadow-md border border-[#E5E1D8]">
            <img
              src={selectedStory.coverImage}
              alt={selectedStory.altText}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Narrative Body & Editorial Pull-Quote */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
            <div className="lg:col-span-4 p-6 bg-[#f0eee9] border border-[#E5E1D8] rounded-sm">
              <p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.2em] text-[#747878] mb-3 font-medium">
                Atelier Notes & Medium
              </p>
              <p className="font-['EB_Garamond'] text-[16px] text-[#1b1c19] leading-relaxed mb-4">
                Captured across three continuous rolls of 16mm vision film and medium format negative emulsions. Documented completely candid without posed disruptions.
              </p>
              {selectedStory.palette && (
                <div className="pt-4 border-t border-[#E5E1D8]">
                  <p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.2em] text-[#747878] mb-2 font-medium">
                    Harmonic Tonal Palette
                  </p>
                  <div className="flex items-center gap-2">
                    {selectedStory.palette.map((color, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full border border-black/10 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-8">
              <p className="font-['EB_Garamond'] text-[20px] text-[#1b1c19] leading-relaxed mb-6 whitespace-pre-line">
                {selectedStory.fullStory}
              </p>

              {selectedStory.quote && (
                <blockquote className="my-8 p-6 border-l-2 border-[#A39274] bg-[#f5f3ee] font-['EB_Garamond'] text-[22px] italic text-[#1b1c19] leading-relaxed">
                  "{selectedStory.quote}"
                  <span className="block mt-2 font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#747878] not-italic">
                    — {selectedStory.couple}
                  </span>
                </blockquote>
              )}
            </div>
          </div>

          {/* Monograph Gallery Spread */}
          <div className="mb-16">
            <h3 className="font-['Playfair_Display'] text-[28px] text-[#1b1c19] mb-6 text-center">
              Selected Plates ({selectedStory.gallery.length + 1} Archival Frames)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedStory.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    onOpenPhoto({
                      id: `${selectedStory.id}-${idx}`,
                      title: `${selectedStory.couple} • Plate 0${idx + 1}`,
                      location: selectedStory.location,
                      category: 'Como & Amalfi',
                      imageUrl: img.url,
                      altText: img.alt,
                      caption: img.caption,
                      filmStock: selectedStory.filmFormat || 'Kodak Portra 400',
                      camera: 'Leica M11 / Bolex 16mm'
                    })
                  }
                  className="group cursor-pointer bg-[#f0eee9] border border-[#E5E1D8] overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-[#f5f3ee] flex items-center justify-between">
                    <span className="font-['EB_Garamond'] text-[15px] text-[#1b1c19] italic">
                      {img.caption}
                    </span>
                    <span className="font-['DM_Sans'] text-[10px] uppercase tracking-wider text-[#A39274]">
                      Plate 0{idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Story / Inquire Footer */}
          <div className="p-8 bg-[#eae8e3] border border-[#E5E1D8] text-center rounded-sm">
            <h4 className="font-['Playfair_Display'] text-[24px] text-[#1b1c19] mb-2">
              Commission Your Own Cinematic Monograph
            </h4>
            <p className="font-['EB_Garamond'] text-[16px] text-[#444748] max-w-lg mx-auto mb-6">
              We accept a limited number of destination stories each year to ensure bespoke artistic attention.
            </p>
            <button
              onClick={onNavigateInquire}
              className="px-8 py-3 bg-black text-white hover:bg-[#A39274] hover:text-black font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] transition-colors rounded-sm cursor-pointer"
            >
              Inquire For Your Celebration
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid of Stories
  return (
    <div className="w-full bg-[#fbf9f4] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.25em] text-[#A39274] mb-2 font-medium">
            Narrative Archives
          </p>
          <h1 className="font-['Playfair_Display'] text-[36px] md:text-[52px] text-[#1b1c19] leading-tight mb-4">
            Stories & Editorial
          </h1>
          <p className="font-['EB_Garamond'] text-[18px] text-[#444748] leading-relaxed italic">
            "A collection of bespoke destination weddings, chronicled through analog film reels, quiet intimacy, and timeless editorial photography."
          </p>
        </div>

        {/* Destination Filter */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-6 mb-12">
          {destinations.map((dest) => (
            <button
              key={dest}
              onClick={() => setActiveFilter(dest)}
              className={`px-5 py-2 rounded-full font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] transition-all cursor-pointer ${
                activeFilter === dest
                  ? 'bg-black text-white shadow'
                  : 'bg-[#f0eee9] text-[#444748] hover:bg-[#E5E1D8]'
              }`}
            >
              {dest}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              onClick={() => onSelectStory(story)}
              className="group cursor-pointer bg-[#f5f3ee] border border-[#E5E1D8] overflow-hidden shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-black/5 relative">
                  <img
                    src={story.coverImage}
                    alt={story.altText}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-md text-[#A39274] font-['DM_Sans'] text-[10px] uppercase tracking-wider">
                    {story.framesCount} Frames
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between text-[#747878] font-['DM_Sans'] text-[11px] uppercase tracking-wider mb-2">
                    <span>{story.location}</span>
                    <span>{story.date}</span>
                  </div>

                  <h3 className="font-['Playfair_Display'] text-[28px] text-[#1b1c19] group-hover:text-[#A39274] transition-colors mb-2">
                    {story.couple}
                  </h3>
                  <p className="font-['EB_Garamond'] text-[18px] text-[#6c5c3f] italic mb-4">
                    {story.subtitle}
                  </p>
                  <p className="font-['EB_Garamond'] text-[16px] text-[#444748] leading-relaxed line-clamp-3">
                    {story.teaser}
                  </p>
                </div>
              </div>

              <div className="px-6 md:px-8 pb-6 pt-4 border-t border-[#E5E1D8] flex items-center justify-between">
                <span className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#1b1c19] group-hover:text-[#A39274] font-medium flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> Read Full Monograph
                </span>
                <span className="font-['DM_Sans'] text-[10px] text-[#747878] uppercase tracking-wider">
                  {story.filmFormat?.split('+')[0] || 'Analog Film'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
