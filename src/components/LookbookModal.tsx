import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Check } from 'lucide-react';

interface LookbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: any) => void;
}

export default function LookbookModal({ isOpen, onClose, onSelectTab }: LookbookModalProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const pages = [
    {
      title: 'Sign by Nanthu Atelier 2025 / 2026',
      subtitle: 'The Fine Art of Wedding Cinema & Celluloid Heirlooms',
      tagline: 'Private Destination Monograph & Commission Prospectus',
      content:
        'Sign by Nanthu is an international cinema atelier dedicated to couples seeking art beyond standard wedding videography. We balance documentary truth with high-fashion editorial rigor across Lake Como, the Amalfi cliffs, Parisian private salons, and Rajasthan palaces.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAW7mBluwzvaPcq4UmaxcDwKJCpJU-OxD8OswZGjaO1dZm8Rv9Smsak0GCy8SStLmhsJoVVFrLKK9ZDt57hZ2ULanfgTOaZtrgdqpxO-oGV5D-Osuy4ukXDOIVsxLy3iVqQ9yFz9tMjuaB5VwOOTMt-vAeAt1lRPcWzHAOdloCuXl12H9JHP7mCgHhL2M__h13SEoTcAYljp4PATM-BsAqnhQluMesySoHK_9MrLAzonqkq01d1EQThxQ',
      details: [
        'Limited to 20 Global Commissions Annually',
        'Direct Creative Direction by Nanthu & Studio',
        'Super 16mm & 35mm Analog Celluloid Inclusion'
      ]
    },
    {
      title: 'The Celluloid Process',
      subtitle: 'Why We Expose Real Motion Film',
      tagline: 'Analog Soul in a Digital Era',
      content:
        'Every wedding we commission integrates authentic 16mm and 35mm motion picture film stock. The chemical depth, organic highlight halation, and silver halide crystals grant your memories an enduring, painterly permanence that no digital filter can mimic.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBzIjL-e3sIBwpAK66rKkfDgpoTP0b5FoW8wd6R5zE7DRnT9O9SmXAC4q1bBjvWEfdf_nJIghdSoKhKqbqOFL4csFZJY-nFjHjvVsZVgS3wGOPc-cEhOwncuBKZ5Dv-ojFhb-7H8cJ-yGDBBw0uilCqS1VlpO1EQhqpAYty9z_vB9s-Cnt__ufR-ffO0rAOhSJPyQ4ZgYVT9SIPKscglG_s9YovFq-bZqN-6CFhjtSwjK13YEoySBjN4Q',
      details: [
        'Kodak Vision3 50D, 250D, 500T Stock',
        'Bolex H16 & Arriflex 416 Cinema Cameras',
        'Hand-processed & 4K Frame-by-Frame Telecine Scans'
      ]
    },
    {
      title: 'Global Residencies & Logistics',
      subtitle: 'Seamless Worldwide Travel',
      tagline: 'From Lake Como to Jaipur',
      content:
        'Our atelier maintains primary equipment residencies in Paris, Lake Como, Mumbai, and New York. All destination commissions include all international airfare, private ground transport, gear customs carnets, and local shooting permits.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDp4wQiN-dAq-KRwzHT_lP_3gC2JMA7HTToCdPjU0d-QJsIO0NUT4DpU7S734W9YvAKVYnJS8fmZKYiQ_qM_VM3x9KkYhvCG_uoJXd_d3aQxyQtjidVswOXYBggtS2wOhvNuMc890QYGMcynuTn7uL9wZEi66F2gwCE0tlJQc6lwJNullaqphrD0bKj8qscFHvNMqeWqp8DdOf5UlbdbqYNB8Id-cZFEObAplhCSXw6-pGm3b9DjlKmSw',
      details: [
        'No hidden travel surcharges or travel bills',
        'Multilingual team fluent in French, Italian, English, Hindi',
        'Comprehensive multi-million public liability coverage'
      ]
    },
    {
      title: 'Heirloom Deliverables',
      subtitle: 'Physical Artifacts Built to Outlast Generations',
      tagline: 'Museum Grade Preservation',
      content:
        'Your bespoke film is delivered on an encrypted, archival brushed-brass drive housed inside a hand-bound Italian calfskin box. Coupled with a 150-page hand-printed monograph on heavy Japanese cotton rag paper.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB7kQ-CaIyyTGxnscGYRAb0BPu9ZihLnHP48UtBXG8mPrWLhQ3lzgS6lvsIwOjzyJ3j9LZTi8-PKmEcPc22lfg5XQqez4ba2o-pOrRWZRlvsf9lnscwqLdcAd2waAfwNafSoqt9729Shia44isgBOySJkpfo61ABRFU1O4FSKa2JAmElzW2En3to01mhdUPlTM1pJRVT29HwjPxn1mQHt7Gz6qV0M1C5fJSmgAqWoU5-zl9n9x29drUNQ',
      details: [
        'Hand-Bound 12x12" Fine-Art Monograph',
        'Engraved Brass Master Storage Cask',
        'Lifetime Cloud Preservation Vault'
      ]
    }
  ];

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 4000);
  };

  const page = pages[currentPage];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#fbf9f4] border border-[#E5E1D8] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 text-[#1b1c19] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close Lookbook"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Spread Left */}
        <div className="md:w-1/2 bg-black relative min-h-[280px] md:min-h-[480px]">
          <img
            src={page.image}
            alt={page.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
            <span className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.25em] text-[#A39274] mb-1">
              {page.tagline}
            </span>
            <h4 className="font-['Playfair_Display'] text-[22px] leading-tight">
              {page.title}
            </h4>
          </div>
        </div>

        {/* Text & Content Right */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-[#fbf9f4] overflow-y-auto">
          <div>
            <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-3 mb-6">
              <span className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.25em] text-[#A39274]">
                Atelier Dossier • Page 0{currentPage + 1} of 0{pages.length}
              </span>
              <span className="font-['DM_Sans'] text-[11px] text-[#747878]">
                2025/2026 Season
              </span>
            </div>

            <h3 className="font-['Playfair_Display'] text-[24px] sm:text-[28px] text-[#1b1c19] leading-tight mb-2">
              {page.subtitle}
            </h3>

            <p className="font-['EB_Garamond'] text-[16px] text-[#2D2D2D] leading-relaxed mb-6">
              {page.content}
            </p>

            <div className="p-4 bg-[#f0eee9] border border-[#E5E1D8] rounded-sm mb-6">
              <p className="font-['DM_Sans'] text-[10px] uppercase tracking-[0.2em] text-[#747878] mb-2 font-medium">
                Atelier Commitments
              </p>
              <ul className="space-y-1.5">
                {page.details.map((d, i) => (
                  <li key={i} className="flex items-center gap-2 font-['EB_Garamond'] text-[15px] text-[#1b1c19]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A39274]" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Controls */}
          <div className="pt-4 border-t border-[#E5E1D8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 0}
                onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
                className="w-9 h-9 rounded-full border border-[#E5E1D8] disabled:opacity-30 hover:bg-[#E5E1D8] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-['DM_Sans'] text-[12px] text-[#747878] px-2">
                {currentPage + 1} / {pages.length}
              </span>
              <button
                disabled={currentPage === pages.length - 1}
                onClick={() => setCurrentPage((prev) => Math.min(pages.length - 1, prev + 1))}
                className="w-9 h-9 rounded-full border border-[#E5E1D8] disabled:opacity-30 hover:bg-[#E5E1D8] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleDownload}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-black text-white hover:bg-[#A39274] hover:text-black font-['DM_Sans'] text-[11px] uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer"
              >
                {downloaded ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Downloaded Lookbook</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  onClose();
                  onSelectTab('inquire-and-book');
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 border border-black text-black hover:bg-black hover:text-white font-['DM_Sans'] text-[11px] uppercase tracking-wider transition-colors rounded-sm cursor-pointer"
              >
                Inquire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
