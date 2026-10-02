import React from 'react';

export const IncludedVideoSection: React.FC = () => {
  return (
    <section
      id="o-que-voce-recebe"
      className="relative w-full bg-white py-14 md:py-20 px-4 overflow-hidden border-b border-emerald-950/5"
    >
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 bg-[#062419] text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase mb-7 shadow-md border border-emerald-500/30">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>TUDO O QUE VOCÊ VAI RECEBER</span>
        </div>

        {/* Big Card */}
        <div className="w-full bg-[#F8FAF9] border border-slate-200/90 rounded-[30px] p-6 sm:p-8 md:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.06)] relative">
          <div className="inline-flex items-center gap-1.5 bg-amber-100/80 text-amber-900 border border-amber-300/80 font-bold text-xs px-3.5 py-1.5 rounded-full uppercase mb-4 tracking-wide">
            ⚡ ACESSO IMEDIATO
          </div>

          <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-8 leading-snug">
            ✦ VEJA TUDO O QUE VOCÊ VAI RECEBER:
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
            {/* Bundle Mockup Column */}
            <div className="lg:col-span-5 flex flex-col items-center w-full max-w-[380px] mx-auto">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-900/20 bg-gradient-to-b from-[#062419] to-[#051812] p-5 text-center">
                <div className="relative w-full flex justify-center items-center py-2">
                  <img
                    alt="100 Modelos STL Natalinos - Pacote Completo"
                    className="w-full h-auto max-h-[340px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] select-none pointer-events-none"
                    loading="lazy"
                    decoding="async"
                    width={380}
                    height={280}
                    src="/optimized/M4QGwBZ.webp"
                  />
                </div>
                <div className="mt-2 bg-white/10 border border-amber-400/40 backdrop-blur-md px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 text-amber-300 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  100 Modelos Testados e Prontos
                </div>
                <p className="text-slate-200 text-xs mt-3 leading-relaxed font-medium">
                  Acesso imediato à pasta organizada com arquivos .STL em alta resolução para fatiamento em qualquer impressora 3D.
                </p>
                <a
                  href="#video-apresentacao"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-bold transition-all hover:scale-105"
                >
                  <span>▲ Rever vídeo de apresentação no topo</span>
                </a>
              </div>
            </div>

            {/* Checklist Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <ul className="flex flex-col gap-3.5 text-left">
                {[
                  '100 arquivos STL Natalinos prontos para imprimir e vender',
                  'Modelos variados de Papai Noel, enfeites, decorações, presentes e peças temáticas',
                  'Arquivos criativos, chamativos e com forte apelo para vendas de fim de ano',
                  'Tudo pronto para uso, sem precisar modelar ou criar arquivos do zero',
                  'Prepare seu catálogo com antecedência e aproveite melhor a temporada de Natal',
                  'Peças ideais para vendas online, encomendas, feiras, lojas e produção sob demanda',
                  'Modelos pensados para criar produtos atrativos, decorativos e fáceis de anunciar',
                  'Perfeito para vender como presentes, lembranças, enfeites e itens de decoração natalina',
                  'Compatível com impressoras 3D e disponível para acesso imediato',
                  'Ideal para quem quer aproveitar o Natal para criar uma nova oportunidade de renda extra',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <svg className="w-3.5 h-3.5 stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-cinzel font-bold text-red-700 text-base mt-6 text-center lg:text-left tracking-wide">
                ✦ E MUITO MAIS...
              </p>
            </div>
          </div>

          {/* CTA at card bottom */}
          <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col items-center">
            <a
              href="#sim"
              className="animate-pulse-green inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-700 hover:from-emerald-400 hover:to-green-600 text-white font-extrabold text-xs sm:text-sm md:text-base py-3 sm:py-3.5 px-6 sm:px-8 rounded-full uppercase tracking-wider shadow-[0_10px_25px_rgba(16,185,129,0.35)] border-2 border-white/90 transition-all transform hover:-translate-y-1 hover:scale-[1.02] max-w-md w-full text-center cursor-pointer"
            >
              <span>SIM, QUERO GARANTIR O MATERIAL</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 stroke-current stroke-[2.5] fill-none shrink-0" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="12 5 19 12 12 19" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
