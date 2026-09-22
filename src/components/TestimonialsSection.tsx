import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/landingData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(3); // Camila Santos is default in template

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section
      id="depoimentos"
      className="relative w-full bg-[#F8FAF9] py-16 md:py-24 px-4 overflow-hidden border-b border-emerald-950/5"
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
          <div className="relative">
            <div className="rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-2 bg-black border-neutral-800 flex flex-col font-sans text-left transition-all duration-300">
              <div className="relative w-full">
                <img
                  key={currentTestimonial.id}
                  alt={`Depoimento de ${currentTestimonial.name}`}
                  className="w-full h-auto object-contain block"
                  loading="lazy"
                  decoding="async"
                  width={480}
                  height={640}
                  referrerPolicy="no-referrer"
                  src={currentTestimonial.image}
                />
              </div>
            </div>

            {/* Left Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#062419] hover:bg-emerald-700 text-amber-300 hover:text-white border-2 border-amber-400/60 flex items-center justify-center shadow-xl transition-all transform hover:scale-110 active:scale-95 cursor-pointer z-20"
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
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#062419] hover:bg-emerald-700 text-amber-300 hover:text-white border-2 border-amber-400/60 flex items-center justify-center shadow-xl transition-all transform hover:scale-110 active:scale-95 cursor-pointer z-20"
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
                    ? 'w-8 h-2.5 bg-[#062419] shadow-[0_0_8px_rgba(6,36,25,0.4)]'
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
