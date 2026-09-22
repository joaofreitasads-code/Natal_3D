import React from 'react';
import { MARQUEE_ROW_1, MARQUEE_ROW_2, MARQUEE_ROW_3, MARQUEE_ROW_4 } from '../data/landingData';

export const MarqueeCarousel: React.FC = () => {
  const renderRow = (images: string[], directionClass: string, duration: string) => {
    // Duplicate array to ensure seamless infinite looping
    const looped = [...images, ...images];

    return (
      <div className={`flex w-max ${directionClass} pointer-events-none select-none`} style={{ animationDuration: duration }}>
        {looped.map((imgSrc, idx) => (
          <div key={idx} className="px-2 sm:px-2.5 shrink-0">
            <div className="w-[180px] sm:w-[210px] md:w-[240px] aspect-square rounded-[18px] sm:rounded-[20px] overflow-hidden relative group shadow-[0_8px_20px_rgba(0,0,0,0.6)] border border-amber-400/50">
              <img
                alt={`Modelo STL ${idx + 1}`}
                className="w-full h-full min-w-full min-h-full object-cover object-center block group-hover:scale-105 transition-transform duration-300"
                style={{
                  width: '100%',
                  height: '100%',
                  minWidth: '100%',
                  minHeight: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                src={imgSrc}
              />
              <div className="absolute top-2.5 right-2.5 bg-black/80 border border-amber-400/60 text-amber-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full backdrop-blur-sm shadow-md">
                ✨ STL
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="carrossel-stl"
      className="relative w-full text-white py-16 md:py-24 overflow-hidden"
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '950px',
        background:
          'radial-gradient(at 50% 15%, rgba(220, 38, 38, 0.18) 0%, rgba(11, 45, 33, 0.96) 60%, rgb(5, 24, 18) 100%), linear-gradient(rgb(9, 38, 27) 0%, rgb(5, 24, 18) 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.12) 1.2px, transparent 0px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 text-center mb-10 px-4">
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
          Modelos Que Encantam e Vendem no Natal
        </h2>
        <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto font-normal">
          Veja em detalhes os modelos STL prontos para imprimir e lucrar neste fim de ano
        </p>
      </div>

      <div className="relative w-full overflow-hidden marquee-container flex flex-col gap-4 md:gap-6 pointer-events-none select-none">
        {/* Left & Right gradient masks for smooth fade */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#051812] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#051812] to-transparent z-20 pointer-events-none" />

        {renderRow(MARQUEE_ROW_1, 'marquee-to-right', '26s')}
        {renderRow(MARQUEE_ROW_2, 'marquee-to-left', '24s')}
        {renderRow(MARQUEE_ROW_3, 'marquee-to-right', '28s')}
        {renderRow(MARQUEE_ROW_4, 'marquee-to-left', '25s')}
      </div>
    </section>
  );
};
