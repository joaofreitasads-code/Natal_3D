import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section
      id="garantia"
      className="relative w-full bg-[#F8FAF9] py-16 md:py-24 px-4 overflow-hidden border-b border-emerald-950/5"
    >
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Seal Image */}
        <div className="w-36 sm:w-44 md:w-52 aspect-square mb-6 drop-shadow-xl hover:scale-105 transition-transform duration-300">
          <img
            alt="Selo de Garantia de 7 Dias Incondicional"
            className="w-full h-full object-contain"
            loading="lazy"
            decoding="async"
            width={208}
            height={208}
            referrerPolicy="no-referrer"
            src="/optimized/616870a2fcb957627b6104d2__ff91c18bb.webp"
          />
        </div>

        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
          Sua compra é 100% segura e sem risco
        </h2>

        <div className="flex flex-col gap-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          <p>
            Você tem <strong className="font-bold text-red-700">7 dias de garantia incondicional</strong> para avaliar todo o material.
          </p>
          <p>
            Acesse os <strong className="font-bold text-[#0F172A]">100 arquivos STL Natalinos</strong> hoje. Se por qualquer motivo você achar que os modelos não são perfeitos para o seu negócio, basta solicitar o reembolso e <strong className="font-bold text-emerald-800">devolvemos 100% do seu dinheiro.</strong>
          </p>
          <p>
            Sem letras miúdas e sem burocracia. <strong className="font-bold text-[#0F172A]">O risco é todo nosso.</strong>
          </p>
          <p className="font-bold text-red-700 text-lg">
            Ou você fatura, ou não paga nada. 👇
          </p>
        </div>

        <a
          href="#sim"
          className="animate-pulse-green inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-700 hover:from-emerald-400 hover:to-green-600 text-white font-extrabold text-xs sm:text-sm md:text-base py-3.5 px-6 sm:px-8 rounded-full uppercase tracking-wider shadow-[0_10px_25px_rgba(16,185,129,0.35)] border-2 border-white transition-all transform hover:-translate-y-1 hover:scale-[1.02] max-w-md w-full mb-8 text-center cursor-pointer"
        >
          <span>QUERO GARANTIR MEU ACESSO SEGURO</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 stroke-current stroke-[2.5] fill-none shrink-0" viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="12 5 19 12 12 19" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 font-medium border-t border-slate-200 pt-6 w-full">
          <div className="flex items-center gap-2">
            <span className="text-emerald-700">🛡️</span>
            <span>Satisfação Garantida</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-700">🔒</span>
            <span>Checkout 100% Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-700">♾️</span>
            <span>Acesso Vitalício</span>
          </div>
        </div>

        <p className="text-xs text-slate-400 mt-4">
          Acesso enviado imediatamente por e-mail após a compra
        </p>
      </div>
    </section>
  );
};
