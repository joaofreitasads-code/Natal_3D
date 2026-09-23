import React from 'react';
import { EXTRA_GALLERY_ROW_1, EXTRA_GALLERY_ROW_2 } from '../data/landingData';

export const ExtraGallerySection: React.FC = () => {
  const renderGalleryRow = (images: string[], directionClass: string, duration: string) => {
    const looped = [...images, ...images];

    return (
      <div className={`flex w-max ${directionClass} pointer-events-none select-none`} style={{ animationDuration: duration }}>
        {looped.map((imgSrc, idx) => (
          <div key={idx} className="px-2 sm:px-2.5 shrink-0">
            <div className="w-[180px] sm:w-[210px] md:w-[240px] aspect-square rounded-[18px] sm:rounded-[20px] overflow-hidden relative group shadow-[0_8px_20px_rgba(0,0,0,0.6)] border border-emerald-500/50">
              <img
                alt={`Modelo Natalino 3D ${idx + 1}`}
                width={240}
                height={240}
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
      id="galeria-acesso"
      className="relative w-full py-14 md:py-20 overflow-hidden bg-[#041911] border-t border-emerald-900/30"
    >
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 w-[400px] h-[250px] bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 mb-8 md:mb-12 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#062419] border border-amber-400/40 text-amber-300 px-5 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase mb-3 shadow-md">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>✨ MODELOS PRONTOS PARA VOCÊ IMPRIMIR</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
          Mais Peças Exclusivas Que Você Vai Imprimir
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Veja abaixo outros modelos de alto valor percebido incluídos no seu acesso.
        </p>
      </div>

      <div className="relative w-full overflow-hidden marquee-container flex flex-col gap-4 md:gap-5">
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#041911] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#041911] to-transparent z-20 pointer-events-none" />

        {renderGalleryRow(EXTRA_GALLERY_ROW_1, 'marquee-to-right', '26s')}
        {renderGalleryRow(EXTRA_GALLERY_ROW_2, 'marquee-to-left', '24s')}
      </div>
    </section>
  );
};
