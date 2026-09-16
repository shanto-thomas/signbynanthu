import { useState } from 'react';
import { EDITORIAL_PRESS } from '../data/portfolioData';
import { EditorialPress } from '../types';
import { BookOpen, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

interface JournalViewProps {
  onNavigateInquire: () => void;
}

export default function JournalView({ onNavigateInquire }: JournalViewProps) {
  const [selectedArticle, setSelectedArticle] = useState<EditorialPress | null>(null);

  const essays = [
    {
      title: 'The Organic Magic of 16mm Analog Motion Picture',
      category: 'Craft & Film',
      readTime: '6 min read',
      date: 'Autumn 2024',
      summary:
        'Why contemporary couples are turning away from sterile 8K digital video in search of the warm, imperfect soul of photochemical motion film.',
      content:
        'There is an undeniable intimacy in the whirr of a Bolex camera spring motor winding on the morning of a wedding. While digital cameras capture trillions of perfect mathematical pixels, they often flatten the tactile mystery of atmosphere. Film has grain—tiny silver crystals suspended in gelatin that react organically to the flare of afternoon sun bouncing off the waters of Lake Como. In this essay, we delve into why 16mm film reels age with unprecedented grace.'
    },
    {
      title: 'Curating the Unhurried Wedding Timeline',
      category: 'Destination Planning',
      readTime: '8 min read',
      date: 'Summer 2024',
      summary:
        'How to structure a multi-day destination celebration in Europe or Rajasthan to maximize spontaneous joy and avoid timeline fatigue.',
      content:
        'The secret to breathtaking documentary photographs is time. When couples cram eight consecutive formalities into an afternoon, tension creeps into shoulders and smiles tighten. The most sublime weddings we document allow for long, luxurious transitions: an extra hour for champagne on the terrace before changing into black tie, a quiet boat ride at dusk with just the two of you, and an unhurried dinner that flows well into the early morning.'
    },
    {
      title: 'The Art of Archival Heirloom Bookmaking',
      category: 'Preservation',
      readTime: '5 min read',
      date: 'Spring 2024',
      summary:
        'Inside our Florentine bindery: how Japanese cotton papers and vegetable-tanned leather preserve your memories for future generations.',
      content:
        'A wedding film or digital album stored on a cloud server is ephemeral; servers change, digital formats decay, and passwords vanish. A physical book bound by hand in Florence using archival pigment inks and 300gsm acid-free rag paper is permanent. It invites family to sit together on a sofa, feeling the physical weight of memories.'
    }
  ];

  return (
    <div className="w-full bg-[#fbf9f4] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.25em] text-[#A39274] mb-2 font-medium">
            Publications & Musings
          </p>
          <h1 className="font-['Playfair_Display'] text-[36px] md:text-[56px] text-[#1b1c19] leading-tight mb-4">
            The Journal
          </h1>
          <p className="font-['EB_Garamond'] text-[22px] text-[#444748] italic leading-relaxed">
            "Features on international newsstands, destination guides, and essays on fine-art wedding preservation."
          </p>
        </div>

        {/* Press Covers Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-4 mb-8">
            <h2 className="font-['Playfair_Display'] text-[24px] text-[#1b1c19]">
              Editorial Newsstands & Covers
            </h2>
            <span className="font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878]">
              International Press
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {EDITORIAL_PRESS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedArticle(item)}
                className="group cursor-pointer bg-[#f0eee9] border border-[#E5E1D8] overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={item.coverImage}
                    alt={item.altText}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1 bg-white text-black font-['DM_Sans'] text-[10px] uppercase tracking-widest">
                      Read Excerpt
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-[#f5f3ee]">
                  <p className="font-['DM_Sans'] text-[10px] uppercase tracking-widest text-[#A39274] font-semibold">
                    {item.publication}
                  </p>
                  <p className="font-['EB_Garamond'] text-[13px] text-[#1b1c19] leading-tight mt-1 line-clamp-2">
                    {item.headline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Article Modal / Drawer */}
        {selectedArticle && (
          <div className="p-8 bg-[#f5f3ee] border border-[#E5E1D8] mb-20 rounded-sm relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 font-['DM_Sans'] text-[11px] uppercase text-[#747878] hover:text-black cursor-pointer"
            >
              Close ✕
            </button>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 aspect-[3/4] overflow-hidden shadow-sm border border-[#E5E1D8]">
                <img
                  src={selectedArticle.coverImage}
                  alt={selectedArticle.altText}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-8">
                <span className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] text-[#A39274] mb-2 block font-medium">
                  {selectedArticle.publication} • {selectedArticle.issue}
                </span>
                <h3 className="font-['Playfair_Display'] text-[28px] md:text-[34px] text-[#1b1c19] mb-4">
                  "{selectedArticle.headline}"
                </h3>
                <p className="font-['EB_Garamond'] text-[20px] text-[#2D2D2D] italic leading-relaxed mb-6">
                  {selectedArticle.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span className="font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878]">
                    Archived in Press Library
                  </span>
                  <button
                    onClick={onNavigateInquire}
                    className="font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#A39274] hover:text-black underline cursor-pointer"
                  >
                    Inquire For Press & Commissions
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Written Essays & Musings */}
        <div className="mb-20">
          <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-4 mb-8">
            <h2 className="font-['Playfair_Display'] text-[24px] text-[#1b1c19]">
              Essays from the Atelier
            </h2>
            <span className="font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878]">
              Reflections on Film & Romance
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {essays.map((essay, index) => (
              <div
                key={index}
                className="p-6 bg-[#f5f3ee] border border-[#E5E1D8] flex flex-col justify-between hover:border-black transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[#747878] font-['DM_Sans'] text-[10px] uppercase tracking-wider mb-3">
                    <span className="text-[#A39274] font-medium">{essay.category}</span>
                    <span>{essay.readTime}</span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-[22px] text-[#1b1c19] mb-3 leading-tight">
                    {essay.title}
                  </h3>
                  <p className="font-['EB_Garamond'] text-[16px] text-[#444748] leading-relaxed mb-6">
                    {essay.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E1D8]">
                  <p className="font-['EB_Garamond'] text-[15px] text-[#1b1c19] italic line-clamp-3">
                    "{essay.content}"
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 font-['DM_Sans'] text-[10px] uppercase tracking-widest text-[#A39274] font-semibold">
                    Read Monograph Excerpt <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-8 bg-[#eae8e3] border border-[#E5E1D8] text-center rounded-sm">
          <h3 className="font-['Playfair_Display'] text-[26px] text-[#1b1c19] mb-2">
            Submit an Editorial Feature or Press Inquiry
          </h3>
          <p className="font-['EB_Garamond'] text-[16px] text-[#444748] max-w-lg mx-auto mb-6">
            For magazine editors, stylists, and syndication partners seeking high-res 16mm film frame scans and editorial monographs.
          </p>
          <a
            href="mailto:press@signbynanthu.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-[#A39274] hover:text-black font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] transition-colors rounded-sm cursor-pointer"
          >
            <span>Contact Press Desk</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
