import { useState, FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { NavigationTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: NavigationTab) => void;
  onOpenLookbook: () => void;
}

export default function Footer({ onSelectTab, onOpenLookbook }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {

    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="w-full bg-[#ffffff] text-[#1b1c19] border-t border-[#E5E1D8] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12 sm:mb-16">
          {/* Left Block */}
          <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-10">
            <div className="mb-8">
              <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-[#A39274] mb-2 font-medium">
                Private Atelier & Cinema
              </p>
              <h2 className="font-['Playfair_Display'] text-[28px] md:text-[40px] text-[#1b1c19] leading-tight tracking-normal max-w-xl">
                Documenting love with timeless, fine-art cinema and editorial nuance.
              </h2>
            </div>

            <div className="max-w-md">
              <p className="font-['EB_Garamond'] text-[16px] text-[#444748] mb-4 leading-relaxed">
                Receive curated seasonal monographs, private exhibition previews, and destination commission availability.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-[#A39274] py-2 font-['EB_Garamond'] text-[16px] italic">
                  <CheckCircle2 className="w-5 h-5 text-[#A39274]" />
                  <span>Thank you. Your address has been entered into the private salon registry.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex items-center border-b border-[#E5E1D8] focus-within:border-black pb-2 transition-colors"
                >
                  <input
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent font-['EB_Garamond'] text-[16px] text-[#1b1c19] placeholder:text-[#747878] focus:outline-none pr-4"
                    placeholder="Your email address"
                    type="email"
                    required
                  />
                  <button
                    className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-[#1b1c19] hover:text-[#A39274] transition-colors shrink-0 font-medium cursor-pointer"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Block */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-6 lg:pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-[#747878] mb-3 font-medium">
                  Global Residencies
                </p>
                <p className="font-['EB_Garamond'] text-[16px] text-[#1b1c19] leading-loose">
                  Paris • Lake Como<br />
                  Mumbai • New York<br />
                  Kyoto • London
                </p>
              </div>

              <div>
                <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-[#747878] mb-3 font-medium">
                  Connect & Follow
                </p>
                <ul className="flex flex-col gap-2 font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-[#444748]">
                  <li>
                    <a
                      href="https://www.instagram.com/signbynanthu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#1b1c19] transition-colors"
                    >
                      Instagram (@signbynanthu)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://vimeo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#1b1c19] transition-colors"
                    >
                      Vimeo Archive
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={onOpenLookbook}
                      className="text-left hover:text-[#1b1c19] transition-colors cursor-pointer"
                    >
                      Atelier Lookbook
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => onSelectTab('journal')}
                      className="text-left hover:text-[#1b1c19] transition-colors cursor-pointer"
                    >
                      Kinfolk & Vogue Features
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Consultations Card */}
            <div className="p-6 bg-[#f5f3ee] border border-[#E5E1D8] rounded-sm">
              <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-[#747878] mb-1 font-medium">
                Consultations
              </p>
              <p className="font-['EB_Garamond'] text-[15px] text-[#1b1c19] mb-4 leading-normal">
                Now accepting bookings for the upcoming international wedding & private commission season.
              </p>
              <button
                onClick={() => {
                  onSelectTab('inquire-and-book');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1 font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-[#A39274] hover:text-[#1b1c19] transition-colors font-medium cursor-pointer"
              >
                <span>Initiate Private Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal Strip */}
        <div className="pt-8 border-t border-[#E5E1D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-['DM_Sans'] text-[12px] text-[#444748]">
            © 2025 Sign by Nanthu. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-['DM_Sans'] text-[12px] text-[#444748]">
            <a href="#manifesto" className="hover:text-[#1b1c19] transition-colors">
              Manifesto
            </a>
            <button onClick={onOpenLookbook} className="hover:text-[#1b1c19] transition-colors cursor-pointer">
              Lookbook PDF
            </button>
            <button onClick={() => onSelectTab('inquire-and-book')} className="hover:text-[#1b1c19] transition-colors cursor-pointer">
              Commissions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
