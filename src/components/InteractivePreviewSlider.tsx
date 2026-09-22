import React, { useState } from 'react';
import { PREVIEW_MODELS } from '../data/landingData';

export const InteractivePreviewSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Model 3 is default in template

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PREVIEW_MODELS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PREVIEW_MODELS.length - 1 ? 0 : prev + 1));
  };

  const currentModel = PREVIEW_MODELS[currentIndex];

  return (
    <section
      id="preview-modelos"
      className="relative w-full text-white py-16 md:py-24 px-4 text-center overflow-hidden"
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '750px',
        background:
          'radial-gradient(at 50% 15%, rgba(220, 38, 38, 0.18) 0%, rgba(11, 45, 33, 0.96) 60%, rgb(5, 24, 18) 100%), linear-gradient(rgb(9, 38, 27) 0%, rgb(5, 24, 18) 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.15) 1.2px, transparent 0px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-9">
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Veja o que você pode começar a{' '}
            <span className="relative text-amber-300 inline-block font-black bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              imprimir hoje:
              <span className="absolute -bottom-1 left-0 w-full h-1 md:h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-red-500" />
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal max-w-3xl mx-auto leading-relaxed mt-4">
            Modelos STL Natalinos prontos para produzir e vender, ideais para montar seu catálogo de fim de ano com peças criativas e de altíssimo valor percebido.
          </p>
        </div>

        <div className="relative max-w-[540px] mx-auto select-none">
          <div className="inline-flex items-center gap-2 bg-[#051812]/90 border border-amber-400/50 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-amber-300 uppercase mb-4 shadow-lg">
            <span>✨</span>
            <span>Modelo STL {currentModel.id} de {PREVIEW_MODELS.length}</span>
          </div>

          <div className="relative p-[3px] sm:p-1 rounded-[26px] bg-gradient-to-br from-amber-300 via-red-500 to-emerald-500 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(16,185,129,0.2)]">
            <div className="bg-black rounded-[23px] overflow-hidden aspect-square flex items-center justify-center relative">
              <img
                key={currentModel.id}
                alt={currentModel.title}
                className="w-full h-full object-cover object-center block transition-opacity duration-300"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                src={currentModel.image}
              />
            </div>

            {/* Left Prev Arrow */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#051812]/95 hover:bg-red-600 text-amber-300 hover:text-white border-2 border-amber-400/60 flex items-center justify-center shadow-2xl backdrop-blur-sm transition-all transform hover:scale-110 active:scale-95 cursor-pointer z-20"
              aria-label="Slide anterior"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Right Next Arrow */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#051812]/95 hover:bg-red-600 text-amber-300 hover:text-white border-2 border-amber-400/60 flex items-center justify-center shadow-2xl backdrop-blur-sm transition-all transform hover:scale-110 active:scale-95 cursor-pointer z-20"
              aria-label="Próximo slide"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-6">
            {PREVIEW_MODELS.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 h-2.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 shadow-[0_0_10px_#F59E0B]'
                    : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Ir para modelo ${item.id}`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-2.5 sm:gap-3 mt-5 px-2">
            {PREVIEW_MODELS.map((item, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative rounded-xl overflow-hidden aspect-square p-0.5 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400 to-red-500 ring-2 ring-amber-400 scale-105 shadow-md opacity-100'
                      : 'bg-white/10 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Selecionar miniatura ${item.id}`}
                >
                  <img
                    alt={`Miniatura ${item.id}`}
                    className="w-full h-full object-cover rounded-[10px]"
                    loading="lazy"
                    decoding="async"
                    width="96"
                    height="96"
                    referrerPolicy="no-referrer"
                    src={item.thumb}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
