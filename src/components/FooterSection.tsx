import React from 'react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#3b060a] text-white py-16 md:py-24 px-4 text-center border-t border-red-500/30 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.2) 1.2px, transparent 0px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Pulsing CTA */}
        <div className="mb-12 w-full flex flex-col items-center">
          <a
            href="#sim"
            className="animate-pulse-neon inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#00E676] via-[#00FF66] to-[#05DF72] hover:from-[#00FF66] hover:to-[#00E676] text-slate-950 font-black text-base sm:text-lg md:text-xl py-4.5 px-8 sm:px-12 rounded-full uppercase tracking-wider shadow-[0_0_35px_rgba(0,255,102,0.7),0_12px_35px_rgba(0,0,0,0.5)] border-2 border-white transition-all transform hover:-translate-y-1 hover:scale-[1.03] active:scale-98 max-w-lg w-full text-center cursor-pointer"
          >
            <span>QUERO GARANTIR O MATERIAL AGORA!</span>
            <svg className="w-5 h-5 stroke-current stroke-[3] fill-none shrink-0" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="12 5 19 12 12 19" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Copyright notice */}
        <div className="bg-red-950/50 border border-red-500/30 rounded-2xl p-6 max-w-3xl mb-8 text-xs sm:text-sm text-slate-200 leading-relaxed">
          <p className="mb-2">
            Os arquivos <strong className="text-white">Pack Viral STL Natalino</strong> são protegidos pela Lei de Direitos Autorais (Lei nº 9.610/98). O compartilhamento, rateio, revenda ou distribuição não autorizada dos arquivos digitais STL é expressamente proibido e passível de sanções civis e criminais.
          </p>
          <p className="text-amber-300 font-bold">
            Pirataria é crime. Valorize o trabalho de criação e modelagem 3D.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-xs text-slate-400">
          <p>© 2026 Pack Viral STL Natalino – stlviral.site. Todos os direitos reservados.</p>
          <p>Este site não é afiliado ao Facebook, Instagram ou Meta Platforms, Inc.</p>
        </div>
      </div>
    </footer>
  );
};
