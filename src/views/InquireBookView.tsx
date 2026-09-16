import { useState, FormEvent } from 'react';
import { BookingInquiry } from '../types';
import { Calendar, MapPin, CheckCircle2, Shield, Heart, Sparkles, Send, ArrowRight } from 'lucide-react';

interface InquireBookViewProps {
  onReturnHome: () => void;
}

export default function InquireBookView({ onReturnHome }: InquireBookViewProps) {
  const [formData, setFormData] = useState<BookingInquiry>({
    partnerOne: '',
    partnerTwo: '',
    email: '',
    phone: '',
    eventDate: '',
    location: 'Lake Como, Northern Italy',
    venue: '',
    guestCount: '50 - 150 guests',
    budgetRange: '€18,000 - €28,000',
    services: ['4K Cinema & Super 16mm Analog', 'Fine-Art 35mm Photography'],
    loveStory: '',
    howDidYouFindUs: 'Vogue / Editorial Feature'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const destinations = [
    'Lake Como, Northern Italy',
    'Amalfi Coast / Ravello / Capri',
    'Tuscany (Borgo Santo Pietro / Val d\'Orcia)',
    'Paris / Loire Valley Châteaux',
    'Rajasthan (Udaipur / Jaipur / Jodhpur)',
    'Kyoto / Tokyo, Japan',
    'French Riviera / Antibes / St. Tropez',
    'New York / Hamptons',
    'Other Bespoke International Destination'
  ];

  const serviceOptions = [
    '4K Cinema & Super 16mm Analog',
    'Fine-Art 35mm Photography',
    'Bespoke Hand-Bound Fine Art Monograph',
    'Rehearsal Dinner & Welcome Party Documentation',
    'Aerial Drone & High-Fidelity Ambience Soundscape'
  ];

  const toggleService = (svc: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(svc)
        ? prev.services.filter((s) => s !== svc)
        : [...prev.services, svc]
    }));
  };

  const handleSubmit = (e: FormEvent) => {

    e.preventDefault();
    const randomTicket = `LUM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(randomTicket);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#fbf9f4] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.25em] text-[#A39274] mb-2 font-medium">
                Private Commissions 2025 / 2026
              </p>
              <h1 className="font-['Playfair_Display'] text-[36px] md:text-[54px] text-[#1b1c19] leading-tight mb-4">
                Inquire & Book
              </h1>
              <p className="font-['EB_Garamond'] text-[20px] text-[#444748] italic leading-relaxed">
                "Our atelier strictly accepts 20 bespoke destination commissions per year to maintain uncompromising craftsmanship and individual direction."
              </p>
            </div>

            {/* Form Box */}
            <form onSubmit={handleSubmit} className="bg-[#f5f3ee] border border-[#E5E1D8] p-8 md:p-12 shadow-sm rounded-sm">
              <div className="space-y-8">
                {/* 1. Couple Names */}
                <div>
                  <h3 className="font-['Playfair_Display'] text-[20px] text-[#1b1c19] mb-4 pb-2 border-b border-[#E5E1D8]">
                    1. The Couple
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878] mb-2">
                        Partner One Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.partnerOne}
                        onChange={(e) => setFormData({ ...formData, partnerOne: e.target.value })}
                        placeholder="e.g. Camilla Dupont"
                        className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#E5E1D8] focus:border-black font-['EB_Garamond'] text-[16px] text-[#1b1c19] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878] mb-2">
                        Partner Two Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.partnerTwo}
                        onChange={(e) => setFormData({ ...formData, partnerTwo: e.target.value })}
                        placeholder="e.g. Arthur Sterling"
                        className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#E5E1D8] focus:border-black font-['EB_Garamond'] text-[16px] text-[#1b1c19] outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Contact Information */}
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878] mb-2">
                        Email Address (Confidential) *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. camilla@example.com"
                        className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#E5E1D8] focus:border-black font-['EB_Garamond'] text-[16px] text-[#1b1c19] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878] mb-2">
                        WhatsApp / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+33 6 12 34 56 78"
                        className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#E5E1D8] focus:border-black font-['EB_Garamond'] text-[16px] text-[#1b1c19] outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Date & Destination */}
                <div>
                  <h3 className="font-['Playfair_Display'] text-[20px] text-[#1b1c19] mb-4 pb-2 border-b border-[#E5E1D8]">
                    2. Celebration Coordinates
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878] mb-2">
                        Wedding Date or Approximate Window *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#E5E1D8] focus:border-black font-['DM_Sans'] text-[14px] text-[#1b1c19] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878] mb-2">
                        Destination Region *
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#E5E1D8] focus:border-black font-['EB_Garamond'] text-[16px] text-[#1b1c19] outline-none transition-colors"
                      >
                        {destinations.map((dest) => (
                          <option key={dest} value={dest}>
                            {dest}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878] mb-2">
                        Venue / Estate (if finalized)
                      </label>
                      <input
                        type="text"
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                        placeholder="e.g. Villa Balbiano, Samode Palace"
                        className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#E5E1D8] focus:border-black font-['EB_Garamond'] text-[16px] text-[#1b1c19] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878] mb-2">
                        Estimated Guest Count
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#E5E1D8] focus:border-black font-['EB_Garamond'] text-[16px] text-[#1b1c19] outline-none transition-colors"
                      >
                        <option value="Intimate Elopement (< 25 guests)">Intimate Elopement (&lt; 25 guests)</option>
                        <option value="25 - 75 guests">25 - 75 guests</option>
                        <option value="75 - 150 guests">75 - 150 guests</option>
                        <option value="150 - 300 guests">150 - 300 guests</option>
                        <option value="Grand Celebration (300+ guests)">Grand Celebration (300+ guests)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 4. Services Desired */}
                <div>
                  <h3 className="font-['Playfair_Display'] text-[20px] text-[#1b1c19] mb-4 pb-2 border-b border-[#E5E1D8]">
                    3. Desired Mediums & Atelier Scope
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceOptions.map((svc) => {
                      const isChecked = formData.services.includes(svc);
                      return (
                        <div
                          key={svc}
                          onClick={() => toggleService(svc)}
                          className={`p-3.5 border cursor-pointer transition-all flex items-center justify-between rounded-sm ${
                            isChecked
                              ? 'bg-[#fbf9f4] border-black text-black'
                              : 'bg-transparent border-[#E5E1D8] text-[#444748] hover:border-[#747878]'
                          }`}
                        >
                          <span className="font-['EB_Garamond'] text-[15px]">{svc}</span>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="accent-black w-4 h-4 cursor-pointer"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 5. Love Story & Notes */}
                <div>
                  <h3 className="font-['Playfair_Display'] text-[20px] text-[#1b1c19] mb-4 pb-2 border-b border-[#E5E1D8]">
                    4. Your Story & Visual Vision
                  </h3>
                  <label className="block font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878] mb-2">
                    Tell us a little about your connection, vision, and how you want your celebration to feel *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.loveStory}
                    onChange={(e) => setFormData({ ...formData, loveStory: e.target.value })}
                    placeholder="Describe the atmosphere, aesthetics, music, or why fine-art film resonates with you..."
                    className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#E5E1D8] focus:border-black font-['EB_Garamond'] text-[16px] text-[#1b1c19] outline-none transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-[#E5E1D8] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-[#747878] font-['DM_Sans'] text-[11px]">
                    <Shield className="w-4 h-4 text-[#A39274]" />
                    <span>Your correspondence is kept strictly private and confidential.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-black text-white hover:bg-[#A39274] hover:text-black font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] transition-all duration-300 font-medium rounded-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Transmit Commission Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation Card */
          <div className="bg-[#f5f3ee] border border-[#E5E1D8] p-8 md:p-12 text-center rounded-sm animate-in fade-in duration-500">
            <div className="w-16 h-16 rounded-full bg-[#fbf9f4] border border-[#A39274] text-[#A39274] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <p className="font-['DM_Sans'] text-[11px] uppercase tracking-[0.25em] text-[#A39274] mb-2 font-medium">
              Receipt of Representation Request
            </p>
            <h2 className="font-['Playfair_Display'] text-[32px] md:text-[42px] text-[#1b1c19] mb-4">
              Thank You, {formData.partnerOne} & {formData.partnerTwo}
            </h2>
            <p className="font-['EB_Garamond'] text-[19px] text-[#444748] leading-relaxed max-w-xl mx-auto mb-8">
              Your inquiry has been received directly by creative director Nanthu and our atelier team. We are reviewing your celebration date ({formData.eventDate || '2025/2026 Season'}) and destination ({formData.location}).
            </p>

            {/* Commission Dossier Summary */}
            <div className="p-6 bg-[#fbf9f4] border border-[#E5E1D8] max-w-lg mx-auto text-left mb-8 rounded-sm">
              <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-3 mb-3">
                <span className="font-['DM_Sans'] text-[11px] uppercase tracking-wider text-[#747878]">
                  Commission Dossier
                </span>
                <span className="font-['DM_Sans'] text-[11px] font-bold text-[#A39274]">
                  {ticketId}
                </span>
              </div>
              <div className="space-y-2 font-['EB_Garamond'] text-[15px] text-[#1b1c19]">
                <p><strong>Destination:</strong> {formData.location}</p>
                {formData.venue && <p><strong>Venue:</strong> {formData.venue}</p>}
                <p><strong>Scope:</strong> {formData.services.join(', ')}</p>
                <p><strong>Primary Contact:</strong> {formData.email}</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-['DM_Sans'] text-[12px] text-[#747878]">
                You will receive a confidential response and availability advisory within 24 hours.
              </p>
              <button
                onClick={onReturnHome}
                className="px-8 py-3 bg-black text-white hover:bg-[#A39274] hover:text-black font-['DM_Sans'] text-[11px] uppercase tracking-[0.22em] transition-colors rounded-sm cursor-pointer"
              >
                Return to Selected Works
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
