import { useState, FormEvent } from 'react';
import { X, Lock, Key, Film, Download, ShieldCheck, Heart } from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientPortalModal({ isOpen, onClose }: ClientPortalModalProps) {
  const [accessPin, setAccessPin] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleUnlock = (e: FormEvent) => {

    e.preventDefault();
    const pin = accessPin.trim().toUpperCase();
    if (pin === 'NANTHU2025' || pin === 'SIGNBYNANTHU' || pin.length >= 4) {
      setIsUnlocked(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Please enter a valid 4+ character client PIN or use sample code: NANTHU2025');
    }
  };

  const handleSampleUnlock = () => {
    setAccessPin('NANTHU2025');
    setIsUnlocked(true);
    setErrorMsg('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#fbf9f4] border border-[#E5E1D8] shadow-2xl p-6 sm:p-10 rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 text-[#1b1c19] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close Client Portal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isUnlocked ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-[#f0eee9] border border-[#A39274]/30 text-[#A39274] flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6" />
            </div>

            <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.25em] text-[#A39274] mb-2 font-medium">
              Private Client Archive
            </p>
            <h3 className="font-['Playfair_Display'] text-[28px] text-[#1b1c19] mb-3">
              Commission Vault Access
            </h3>
            <p className="font-['EB_Garamond'] text-[16px] text-[#444748] max-w-md mx-auto mb-6">
              Enter your bespoke gallery passcode provided in your representation agreement to view uncut reels, high-resolution film scans, and proofing selects.
            </p>

            <form onSubmit={handleUnlock} className="max-w-sm mx-auto space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Passcode (e.g. NANTHU2025)"
                  value={accessPin}
                  onChange={(e) => setAccessPin(e.target.value)}
                  className="w-full px-4 py-3 bg-[#f0eee9] border border-[#E5E1D8] focus:border-black font-['DM_Sans'] text-center tracking-widest text-[14px] uppercase text-[#1b1c19] outline-none rounded-sm transition-colors"
                />
                <Key className="w-4 h-4 text-[#A39274] absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>

              {errorMsg && (
                <p className="font-['DM_Sans'] text-[12px] text-red-600">{errorMsg}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-black text-white hover:bg-[#A39274] hover:text-black font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] transition-all rounded-sm font-medium cursor-pointer"
              >
                Unlock Encrypted Vault
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-[#E5E1D8]/60 flex items-center justify-center gap-4 text-[#747878] font-['DM_Sans'] text-[12px]">
              <button
                onClick={handleSampleUnlock}
                className="text-[#A39274] hover:text-black underline underline-offset-4 cursor-pointer"
              >
                Quick Preview with Sample Passcode (NANTHU2025)
              </button>
            </div>
          </div>
        ) : (
          <div className="py-2 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-4 mb-6">
              <div className="flex items-center gap-2 text-[#A39274]">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-['DM_Sans'] text-[11px] uppercase tracking-wider font-semibold">
                  Authenticated Vault • Camilla & Arthur (Tuscany 2024)
                </span>
              </div>
              <button
                onClick={() => setIsUnlocked(false)}
                className="font-['DM_Sans'] text-[11px] text-[#747878] hover:text-black underline cursor-pointer"
              >
                Lock Vault
              </button>
            </div>

            <div className="space-y-4 mb-8">
              <div className="p-4 bg-[#f0eee9] border border-[#E5E1D8] rounded-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Film className="w-5 h-5 text-[#A39274]" />
                  <div>
                    <h5 className="font-['DM_Sans'] text-[13px] font-bold text-[#1b1c19]">
                      Cinematic Feature Master (4K ProRes 422 HQ)
                    </h5>
                    <p className="font-['EB_Garamond'] text-[14px] text-[#444748] italic">
                      Runtime: 18 min 45 sec • 14.2 GB • Dolby 5.1 Surround
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => alert('Initiating secure download of ProRes Master Reel (14.2 GB)...')}
                  className="p-2 text-black hover:text-[#A39274] transition-colors cursor-pointer"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 bg-[#f0eee9] border border-[#E5E1D8] rounded-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Film className="w-5 h-5 text-[#A39274]" />
                  <div>
                    <h5 className="font-['DM_Sans'] text-[13px] font-bold text-[#1b1c19]">
                      Super 16mm Analog Kodak Scans (Telecine Raw)
                    </h5>
                    <p className="font-['EB_Garamond'] text-[14px] text-[#444748] italic">
                      12 Rolls • Uncompressed DPX Stacks
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => alert('Initiating secure download of 16mm Raw Scans...')}
                  className="p-2 text-black hover:text-[#A39274] transition-colors cursor-pointer"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 bg-[#f0eee9] border border-[#E5E1D8] rounded-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-[#A39274]" />
                  <div>
                    <h5 className="font-['DM_Sans'] text-[13px] font-bold text-[#1b1c19]">
                      Fine-Art Monograph Proofing (Japanese Cotton Paper Edition)
                    </h5>
                    <p className="font-['EB_Garamond'] text-[14px] text-[#444748] italic">
                      160 Pages • 248 Curated Plates • Proof Status: Approved for Bindery
                    </p>
                  </div>
                </div>
                <span className="font-['DM_Sans'] text-[11px] uppercase tracking-wider text-green-700 bg-green-100 px-2 py-0.5 rounded">
                  In Bindery
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#f5f3ee] border border-[#E5E1D8] text-center">
              <p className="font-['EB_Garamond'] text-[15px] text-[#444748]">
                Need additional master drive copies or custom darkroom prints? Contact our concierge desk directly at concierge@signbynanthu.com
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
