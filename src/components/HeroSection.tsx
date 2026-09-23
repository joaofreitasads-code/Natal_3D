import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full text-white text-center overflow-hidden pt-12 pb-20 px-4 md:pt-16 md:pb-28 md:px-6 flex flex-col items-center"
      style={{
        background:
          'radial-gradient(at 50% 10%, rgba(220, 38, 38, 0.2) 0%, rgba(11, 45, 33, 0.95) 55%, rgb(5, 24, 18) 100%), linear-gradient(rgb(9, 38, 27) 0%, rgb(5, 24, 18) 100%)',
      }}
    >
      {/* Background Dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1.2px, transparent 0px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient Glow */}
      <div
        className="absolute top-[26%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[620px] h-[280px] md:h-[450px] pointer-events-none blur-[70px]"
        style={{
          background:
            'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, rgba(16, 185, 129, 0.12) 50%, transparent 75%)',
        }}
      />

      {/* Category Pill */}
      <a
        href="#carrossel-stl"
        className="relative z-10 inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-amber-400/40 backdrop-blur-md px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase text-amber-300 mb-6 shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
        title="Ver modelos da Coleção de Natal 2026"
      >
        <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_10px_#FBBF24] animate-pulse" />
        <span>🎄 Coleção de Natal 2026</span>
      </a>

      {/* Main Headline */}
      <h1 className="relative z-10 font-cinzel text-2xl sm:text-3xl md:text-5xl font-extrabold max-w-5xl mx-auto leading-tight md:leading-tight mb-8 md:mb-10 tracking-tight text-white drop-shadow-sm">
        100 Arquivos STL Natalinos para você imprimir,{' '}
        <span className="text-amber-300 bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent font-black drop-shadow-[0_2px_12px_rgba(245,158,11,0.35)]">
          vender e lucrar com sua impressora 3D neste fim de ano
        </span>
      </h1>

      {/* Hero Showcase Image */}
      <div className="relative z-10 w-full max-w-2xl lg:max-w-3xl mx-auto mb-8 flex flex-col items-center px-4">
        <div className="relative w-full flex justify-center items-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 max-w-lg mx-auto h-3/4 top-1/2 -translate-y-1/2 bg-radial from-amber-400/20 via-emerald-500/10 to-transparent blur-3xl pointer-events-none -z-10"
          />
          <div className="w-full flex justify-center">
            <img
              alt="100 Arquivos STL Natalinos para Impressão 3D"
              className="w-full h-auto max-h-[520px] sm:max-h-[600px] md:max-h-[680px] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.75)] select-none pointer-events-none"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width="680"
              height="480"
              referrerPolicy="no-referrer"
              src="/optimized/M4QGwBZ.webp"
            />
          </div>
        </div>

        <div className="mt-3 bg-[#051812]/90 border border-amber-400/40 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 text-white text-xs sm:text-sm font-semibold shadow-xl">
          <svg className="w-4 h-4 text-amber-400 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Arquivos 100% Testados e Prontos para Fatiamento
        </div>
      </div>

      {/* Description */}
      <div className="relative z-10 max-w-3xl mx-auto mb-9 px-3 mt-4">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-100 font-normal">
          Receba uma coleção exclusiva com{' '}
          <strong className="font-bold text-amber-300">100 modelos STL Natalinos</strong>, prontos
          para imprimir e vender. Aproveite a temporada de fim de ano para criar{' '}
          <strong className="font-bold text-amber-300">peças diferenciadas</strong>, chamativas e com{' '}
          <strong className="font-bold text-amber-300">grande potencial comercial</strong>, sem perder
          tempo criando modelos do zero.
        </p>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <a
          href="#sim"
          className="animate-pulse-green inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-700 hover:from-emerald-400 hover:to-green-600 text-white font-extrabold text-sm sm:text-base py-3.5 sm:py-4 px-6 sm:px-8 rounded-full uppercase tracking-wider shadow-[0_12px_30px_rgba(16,185,129,0.4)] border-2 border-white/90 transition-all transform hover:-translate-y-1 hover:scale-[1.02] max-w-md w-full cursor-pointer"
        >
          <span>QUERO GARANTIR OS MODELOS AGORA!</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 stroke-current stroke-[2.5] fill-none shrink-0" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="12 5 19 12 12 19" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Benefits underneath CTA */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap mt-5 text-xs sm:text-sm text-slate-200">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <svg className="w-4 h-4 text-emerald-400 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Acesso Imediato
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <svg className="w-4 h-4 text-emerald-400 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Vitalício
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <svg className="w-4 h-4 text-emerald-400 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Pagamento 100% Seguro
          </span>
        </div>
      </div>
    </section>
  );
};
