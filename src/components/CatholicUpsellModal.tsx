import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CATHOLIC_PACK_IMAGES, CHECKOUT_URLS } from '../data/landingData';

interface CatholicUpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatholicUpsellModal: React.FC<CatholicUpsellModalProps> = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(479); // 7:59
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const images = CATHOLIC_PACK_IMAGES;
  const total = images.length;

  // Countdown timer
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Next / Prev slide handlers
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay slider
  useEffect(() => {
    if (isOpen && !isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 2800);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [isOpen, isHovered, handleNext]);

  // Format MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm sm:max-w-md my-auto p-0.5 sm:p-1 rounded-[22px] bg-gradient-to-br from-amber-300 via-red-500 to-emerald-600 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_30px_rgba(245,158,11,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#041C14] rounded-[20px] p-3 sm:p-4 md:p-5 flex flex-col items-center text-center relative max-h-[95vh]">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors text-sm font-bold cursor-pointer z-30"
            aria-label="Fechar janela"
          >
            ✕
          </button>

          {/* Countdown badge */}
          <div className="inline-flex items-center gap-1 bg-red-600 text-white text-[9px] sm:text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1 shadow animate-pulse border border-red-400/40">
            <span>⏳</span>
            <span>OFERTA ÚNICA: {formatTime(timeLeft)}</span>
          </div>

          {/* Title */}
          <h2 className="font-cinzel text-base sm:text-xl font-black text-white leading-tight mb-0.5">
            Leve Também o <span className="text-amber-400">Pack +500 STLs Católicos</span>!
          </h2>

          <p className="text-[11px] sm:text-xs text-amber-200 leading-tight mb-1.5 font-medium px-1">
            Pague{' '}
            <strong className="text-emerald-300 font-extrabold underline">
              só a diferença de +R$ 7
            </strong>{' '}
            sobre o Completo e leve os 2 packs por{' '}
            <strong className="text-white font-black">R$ 36,90</strong>!
          </p>

          {/* Interactive Model Slider */}
          <div
            className="w-full max-w-[280px] sm:max-w-[320px] mx-auto my-1 select-none relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStart === null) return;
              const diff = touchStart - e.changedTouches[0].clientX;
              if (diff > 35) handleNext();
              else if (diff < -35) handlePrev();
              setTouchStart(null);
            }}
          >
            <div className="relative h-28 sm:h-36 w-full rounded-xl overflow-hidden shadow-lg bg-black/60 border border-amber-400/40">
              <img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Modelo STL Católico ${currentIndex + 1}`}
                className="w-full h-full object-contain p-1 transition-opacity duration-300"
                loading="lazy"
                decoding="async"
                width={320}
                height={144}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-1.5 left-1.5 bg-[#041C14]/90 border border-amber-400/60 text-amber-300 text-[9px] font-extrabold px-2 py-0.5 rounded-full backdrop-blur-xs">
                ✨ +500 STLs
              </div>
              <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-white/20">
                {currentIndex + 1}/{total}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center text-xs font-bold border border-white/20 transition-all cursor-pointer"
                aria-label="Anterior"
              >
                ◀
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center text-xs font-bold border border-white/20 transition-all cursor-pointer"
                aria-label="Próximo"
              >
                ▶
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-1 mt-1">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all rounded-full cursor-pointer ${
                    idx === currentIndex
                      ? 'w-3.5 h-1 bg-[#25D366]'
                      : 'w-1 h-1 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Included Features Box */}
          <div className="w-full bg-white/5 border border-white/10 rounded-lg py-1 px-2 text-center my-1 text-[10px] sm:text-[11px] text-white/95">
            <span>
              ✓ <strong>Plano Completo Natalino</strong> + ✓ <strong>500 STLs Católicos</strong> • Vitalício
            </span>
          </div>

          {/* Pricing Row */}
          <div className="flex items-center justify-center gap-2 my-1">
            <span className="text-white/50 line-through text-[11px] font-semibold">
              De R$ 127
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#F7D070] font-bold">
              POR APENAS:
            </span>
            <span className="font-cinzel text-2xl sm:text-3xl font-black text-[#25D366] leading-none">
              R$ 36,90
            </span>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col gap-1.5 mt-1">
            {/* Upgrade Combo Option (R$ 36,90) */}
            <a
              href={CHECKOUT_URLS.completeCatholicBundle}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'InitiateCheckout', { value: 36.90, currency: 'BRL', content_name: 'Combo Completo Natalino + 500 Católicos' });
                }
                onClose();
              }}
              className="animate-pulse-green w-full py-2.5 sm:py-3 px-3 rounded-xl bg-gradient-to-r from-[#1EB954] via-[#22C55E] to-[#15803D] hover:from-[#22C55E] hover:to-[#166534] text-white font-black text-xs sm:text-sm uppercase tracking-wide shadow-lg border border-white/80 transition-all transform hover:scale-[1.01] active:scale-98 cursor-pointer flex flex-col items-center justify-center leading-tight gap-0.5"
            >
              <div className="flex items-center gap-1">
                <span>✅</span>
                <span>SIM! QUERO OS 2 PACKS POR R$ 36,90</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-white/90 font-normal normal-case">
                Pague só a diferença de R$ 7 no checkout
              </span>
            </a>

            {/* Reject Upgrade (Keep R$ 29,90) */}
            <a
              href={CHECKOUT_URLS.complete}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'InitiateCheckout', { value: 29.90, currency: 'BRL', content_name: 'Pack Viral Natalino Completo' });
                }
                onClose();
              }}
              className="w-full py-1.5 sm:py-2 px-3 rounded-xl bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#991B1B] hover:from-[#DC2626] hover:to-[#7F1D1D] text-white/90 hover:text-white font-bold text-[10px] sm:text-[11px] uppercase tracking-wide border border-white/25 transition-all transform hover:scale-[1.01] active:scale-98 cursor-pointer flex items-center justify-center gap-1"
            >
              <span>❌</span>
              <span>NÃO, QUERO APENAS O COMPLETO (R$ 29,90)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
