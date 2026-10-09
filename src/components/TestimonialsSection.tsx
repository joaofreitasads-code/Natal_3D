import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/landingData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(3); // Camila Santos is default in template
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Preload all testimonial images into memory on mount
  useEffect(() => {
    TESTIMONIALS.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="depoimentos"
      className="relative w-full bg-white py-16 md:py-24 px-4 overflow-hidden border-b border-red-100/60"
    >
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Stars */}
        <div className="flex items-center justify-center gap-1.5 text-amber-400 text-2xl mb-3 drop-shadow-xs">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>

        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-3 tracking-tight leading-tight">
          Resultados reais dos{' '}
          <span className="relative text-red-600 inline-block font-black">
            nossos Clientes!
            <span className="absolute -bottom-1 left-0 w-full h-1 md:h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-red-600" />
          </span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl mx-auto mb-8">
          Veja o que quem já está imprimindo e vendendo os modelos tem a dizer sobre os resultados:
        </p>

        {/* Carousel Container */}
        <div className="relative max-w-md sm:max-w-lg mx-auto select-none">
          <div
            className="relative"
            onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStart === null) return;
              const diff = touchStart - e.changedTouches[0].clientX;
              if (diff > 40) handleNext();
              else if (diff < -40) handlePrev();
              setTouchStart(null);
            }}
          >
            <div className="rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.12)] border-2 bg-white border-slate-200 flex flex-col font-sans text-left">
              <div className="relative w-full overflow-hidden bg-white">
                <div
                  className="flex transition-transform duration-300 ease-out will-change-transform"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {TESTIMONIALS.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="w-full shrink-0 flex items-center justify-center bg-white"
                    >
                      <img
                        alt={`Depoimento de ${testimonial.name}`}
                        className="w-full h-auto object-contain block bg-white"
                        loading="eager"
                        decoding="sync"
                        width={480}
                        height={640}
                        referrerPolicy="no-referrer"
                        src={testimonial.image}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Left Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-red-700 hover:bg-red-600 text-white border-2 border-white flex items-center justify-center shadow-xl transition-all transform hover:scale-110 active:scale-95 cursor-pointer z-20"
              aria-label="Depoimento anterior"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Right Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-red-700 hover:bg-red-600 text-white border-2 border-white flex items-center justify-center shadow-xl transition-all transform hover:scale-110 active:scale-95 cursor-pointer z-20"
              aria-label="Próximo depoimento"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-7">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 h-2.5 bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.4)]'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
