import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Coffee } from 'lucide-react';
import { ReservationForm } from '../types/cafe';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationForm>({
    name: '',
    email: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '10:00 AM',
    partySize: 2,
    seatingArea: 'Sunlit Main Hall',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `MG-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] text-[#221F1B] w-full max-w-lg rounded-lg shadow-2xl p-6 sm:p-8 border border-[#DED7CE]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-sm hover:bg-[#EFEAE2] text-[#2A231D] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#3A7D44] mx-auto" />
            <h3 className="text-2xl font-serif font-bold text-[#1F1914]">
              Table Reserved at The Morning Grind
            </h3>
            <p className="text-xs text-[#7C6E60]">
              Confirmation reference: <span className="font-mono font-bold text-[#1F1914]">{bookingRef}</span>
            </p>
            <div className="p-4 bg-white/80 rounded-md border border-[#E8E2D9] text-left text-xs space-y-1.5 text-[#5C5045]">
              <p><strong>Guest:</strong> {formData.name}</p>
              <p><strong>Date & Time:</strong> {formData.date} at {formData.time}</p>
              <p><strong>Party Size:</strong> {formData.partySize} {formData.partySize === 1 ? 'Guest' : 'Guests'}</p>
              <p><strong>Seating Area:</strong> {formData.seatingArea}</p>
              {formData.specialRequests && (
                <p><strong>Special Notes:</strong> {formData.specialRequests}</p>
              )}
            </div>
            <p className="text-xs text-[#7C6E60] leading-relaxed">
              A calendar confirmation has been logged. We hold tables for 15 minutes past the reservation time. See you soon for coffee and warm pastries!
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#2A231D] rounded-sm hover:bg-[#43382F]"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#7C6E60] font-medium block mb-1">
                Hospitality & Gatherings
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1914]">
                Reserve a Table
              </h3>
              <p className="text-xs text-[#6E6359] mt-1">
                We accept reservations for morning coffee tastings, brunch tables, and private corner booths.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#4A423B] font-semibold mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Claire Davies"
                    className="w-full p-2.5 bg-white border border-[#D9D0C3] rounded-sm text-[#2A231D] focus:outline-hidden focus:border-[#2A231D]"
                  />
                </div>
                <div>
                  <label className="block text-[#4A423B] font-semibold mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="claire@example.com"
                    className="w-full p-2.5 bg-white border border-[#D9D0C3] rounded-sm text-[#2A231D] focus:outline-hidden focus:border-[#2A231D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[#4A423B] font-semibold mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#D9D0C3] rounded-sm text-[#2A231D] focus:outline-hidden focus:border-[#2A231D]"
                  />
                </div>
                <div>
                  <label className="block text-[#4A423B] font-semibold mb-1">Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full p-2.5 bg-white border border-[#D9D0C3] rounded-sm text-[#2A231D] focus:outline-hidden focus:border-[#2A231D]"
                  >
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:30 PM">2:30 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#4A423B] font-semibold mb-1">Party Size</label>
                  <select
                    value={formData.partySize}
                    onChange={(e) => setFormData({ ...formData, partySize: Number(e.target.value) })}
                    className="w-full p-2.5 bg-white border border-[#D9D0C3] rounded-sm text-[#2A231D] focus:outline-hidden focus:border-[#2A231D]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#4A423B] font-semibold mb-1">Seating Preference</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Sunlit Main Hall', 'Roaster Bar', 'Garden Courtyard'] as const).map((area) => (
                    <button
                      type="button"
                      key={area}
                      onClick={() => setFormData({ ...formData, seatingArea: area })}
                      className={`py-2 px-2 text-center rounded-sm border transition-all cursor-pointer ${
                        formData.seatingArea === area
                          ? 'bg-[#2A231D] text-white border-[#2A231D]'
                          : 'bg-white text-[#5C5045] border-[#D9D0C3] hover:bg-[#F2ECE3]'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#4A423B] font-semibold mb-1">Special Notes / Dietary Requirements</label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="e.g. Celebrating an anniversary; highchair required..."
                  className="w-full p-2.5 bg-white border border-[#D9D0C3] rounded-sm text-[#2A231D] focus:outline-hidden focus:border-[#2A231D]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#2A231D] hover:bg-[#43382F] rounded-sm transition-colors cursor-pointer"
                >
                  Confirm Table Reservation
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
