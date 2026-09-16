import { useState } from 'react';
import { Menu, X, User, Sparkles } from 'lucide-react';
import { NavigationTab } from '../types';

interface HeaderProps {
  activeTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  onOpenPortal: () => void;
}

export default function Header({ activeTab, onSelectTab, onOpenPortal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; tab: NavigationTab }[] = [
    { label: 'Selected Works', tab: 'selected-works' },
    { label: 'Stories & Editorial', tab: 'stories-and-editorial' },
    { label: 'Films & Motion', tab: 'films-and-motion' },
    { label: 'About & Philosophy', tab: 'about-and-philosophy' },
    { label: 'Journal', tab: 'journal' },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fbf9f4]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)] border-b border-[#E5E1D8]/60 transition-all duration-300">
      <div className="h-16 sm:h-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex items-center justify-between gap-3">
        {/* Brand Logo & Wordmark - Perfectly Aligned */}
        <button
          onClick={() => handleNavClick('selected-works')}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group text-left shrink-0 focus:outline-none"
          id="brand-logo-btn"
          aria-label="Sign by Nanthu - Return to Homepage"
        >
          {/* Atelier Monogram Seal */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#A39274]/90 bg-[#1b1c19] text-[#fbf9f4] flex items-center justify-center font-['Playfair_Display'] text-[11px] sm:text-[12px] tracking-widest font-semibold shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#A39274] group-hover:text-[#1b1c19]">
            SN
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-['Playfair_Display'] text-[15px] xs:text-[17px] sm:text-[20px] md:text-[22px] tracking-[0.1em] sm:tracking-[0.16em] uppercase text-[#1b1c19] group-hover:opacity-80 transition-opacity whitespace-nowrap leading-none">
              Sign by Nanthu
            </span>
            <span className="font-['DM_Sans'] text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#747878] group-hover:text-[#A39274] transition-colors mt-0.5 leading-none">
              Cinema & Atelier
            </span>
          </div>
        </button>

        {/* Desktop Navigation (visible on large screens) */}
        <nav className="hidden xl:flex items-center gap-6 lg:gap-8 2xl:gap-10" id="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                id={`nav-link-${item.tab}`}
                className={`font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] py-1.5 transition-colors cursor-pointer relative whitespace-nowrap ${
                  isActive
                    ? 'text-[#1b1c19] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#A39274]'
                    : 'text-[#444748] hover:text-[#1b1c19] font-medium'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Inquire, Client Vault & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('inquire-and-book')}
            id="header-inquire-btn"
            className={`hidden lg:inline-flex items-center justify-center px-5 py-2 rounded-full font-['DM_Sans'] text-[11px] uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer whitespace-nowrap ${
              activeTab === 'inquire-and-book'
                ? 'bg-[#000000] text-white shadow-[0_0_0_1px_rgba(0,0,0,1)]'
                : 'text-[#1b1c19] hover:bg-[#000000] hover:text-white shadow-[0_0_0_1px_rgba(27,28,25,0.2)] hover:shadow-[0_0_0_1px_rgba(0,0,0,1)]'
            }`}
          >
            Inquire / Book
          </button>

          {/* Client Portal Vault Button */}
          <button
            onClick={onOpenPortal}
            id="client-portal-btn"
            title="Private Client Gallery Vault"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1b1c19] text-[#fbf9f4] hover:bg-[#A39274] hover:text-[#1b1c19] transition-colors flex items-center justify-center shrink-0 cursor-pointer"
            aria-label="Access client portal"
          >
            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 sm:p-2 text-[#1b1c19] hover:text-[#A39274] transition-colors cursor-pointer rounded-sm"
            id="mobile-menu-toggle-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Smooth Touch Targets */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fbf9f4] border-t border-[#E5E1D8] px-5 py-6 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => handleNavClick(item.tab)}
                className={`text-left py-3 px-2 font-['DM_Sans'] text-[12px] uppercase tracking-[0.2em] border-b border-[#E5E1D8]/50 transition-colors flex items-center justify-between ${
                  activeTab === item.tab
                    ? 'text-[#1b1c19] font-bold bg-[#f5f3ee]'
                    : 'text-[#444748] hover:text-[#1b1c19]'
                }`}
              >
                <span>{item.label}</span>
                {activeTab === item.tab && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A39274]" />
                )}
              </button>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => handleNavClick('inquire-and-book')}
                className="w-full py-3.5 bg-[#000000] text-white font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-center rounded-full hover:bg-[#A39274] hover:text-black transition-colors font-medium shadow-sm"
              >
                Inquire / Book Private Commission
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal();
                }}
                className="w-full py-3 border border-[#1b1c19] text-[#1b1c19] font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] text-center rounded-full hover:bg-[#1b1c19] hover:text-white transition-colors"
              >
                Client Gallery Portal Vault
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
