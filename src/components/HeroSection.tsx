import React from 'react';
import { VideoPlayer } from './VideoPlayer';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full text-white text-center overflow-hidden pt-10 pb-16 px-4 md:pt-14 md:pb-24 md:px-6 flex flex-col items-center"
      style={{
        background:
          'radial-gradient(at 50% 10%, rgba(254, 202, 202, 0.15) 0%, rgba(220, 38, 38, 0.45) 25%, rgba(153, 27, 27, 0.96) 60%, rgb(95, 11, 19) 100%), linear-gradient(rgb(136, 19, 31) 0%, rgb(88, 10, 17) 100%)',
      }}
    >
      {/* Background Snow Dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.25) 1.2px, transparent 0px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient Glow */}
      <div
        className="absolute top-[26%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[620px] h-[280px] md:h-[450px] pointer-events-none blur-[70px]"
        style={{
          background:
            'radial-gradient(circle, rgba(254, 240, 138, 0.22) 0%, rgba(239, 68, 68, 0.3) 50%, transparent 75%)',
        }}
      />

      {/* Category Pill */}
      <a
        href="#carrossel-stl"
        className="relative z-10 inline-flex items-center gap-2.5 bg-white/20 hover:bg-white/30 border border-white/60 backdrop-blur-md px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase text-white mb-5 shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
        title="Ver modelos da Coleção de Natal 2026"
      >
        <span className="w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_10px_#FDE047] animate-pulse" />
        <span>🎄 Coleção de Natal 2026</span>
      </a>

      {/* Main Headline */}
      <h1 className="relative z-10 font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black max-w-6xl mx-auto leading-[1.12] md:leading-[1.1] tracking-tight text-white drop-shadow-md mb-4 sm:mb-6">
        Transforme sua impressora 3D em uma{' '}
        <span className="text-amber-300 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent font-black drop-shadow-[0_4px_20px_rgba(245,158,11,0.45)]">
          máquina de vendas neste Natal
        </span>
      </h1>

      {/* Subheadline - Grande e Destacada */}
      <p className="relative z-10 text-lg sm:text-2xl md:text-3xl lg:text-[1.95rem] font-bold text-amber-100/95 max-w-5xl mx-auto leading-snug md:leading-snug mb-8 sm:mb-10 drop-shadow-md px-2">
        Acesse arquivos STL natalinos prontos para{' '}
        <span className="text-amber-300 font-extrabold underline decoration-amber-400/60 decoration-2 underline-offset-4">
          imprimir, divulgar e vender
        </span>{' '}
        ainda este fim de ano.
      </p>

      {/* Video Presentation at the beginning of the page */}
      <div id="video-apresentacao" className="relative z-10 w-full max-w-[360px] mx-auto mb-6 flex flex-col items-center px-2">
        <div className="flex items-center gap-2 font-bold text-amber-300 text-sm md:text-base mb-3 drop-shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-blink-dot" />
          Assista para conhecer 👇
        </div>

        <VideoPlayer />

        <div className="mt-3.5 bg-[#4c090f]/95 border border-white/40 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 text-white text-xs sm:text-sm font-semibold shadow-xl">
          <svg className="w-4 h-4 text-amber-300 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Arquivos 100% Testados e Prontos para Fatiamento
        </div>
      </div>

      {/* Description */}
      <div className="relative z-10 max-w-3xl mx-auto mb-7 px-3">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-slate-100 font-normal">
          Acesse <strong className="font-bold text-amber-300">+200 modelos STL Natalinos</strong> prontos
          para imprimir e vender. Crie <strong className="font-bold text-amber-300">peças decorativas</strong>, lembrancinhas e enfeites com{' '}
          <strong className="font-bold text-amber-300">alto potencial de venda</strong> neste fim de ano, sem modelar nada do zero.
        </p>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <a
          href="#sim"
          className="animate-pulse-neon inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#00E676] via-[#00FF66] to-[#05DF72] hover:from-[#00FF66] hover:to-[#00E676] text-slate-950 font-black text-sm sm:text-base py-3.5 sm:py-4 px-6 sm:px-8 rounded-full uppercase tracking-wider shadow-[0_0_30px_rgba(0,255,102,0.65),0_10px_25px_rgba(0,0,0,0.5)] border-2 border-white transition-all transform hover:-translate-y-1 hover:scale-[1.03] active:scale-98 max-w-md w-full cursor-pointer"
        >
          <span>QUERO GARANTIR OS MODELOS AGORA!</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 stroke-current stroke-[3] fill-none shrink-0" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="12 5 19 12 12 19" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Benefits underneath CTA */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap mt-5 text-xs sm:text-sm text-slate-200">
          <span className="inline-flex items-center gap-1.5 font-medium text-white">
            <svg className="w-4 h-4 text-amber-300 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Acesso Imediato
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium text-white">
            <svg className="w-4 h-4 text-amber-300 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Vitalício
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium text-white">
            <svg className="w-4 h-4 text-amber-300 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Pagamento 100% Seguro
          </span>
        </div>
      </div>
    </section>
  );
};
