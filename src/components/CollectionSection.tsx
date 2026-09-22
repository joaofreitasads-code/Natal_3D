import React from 'react';

export const CollectionSection: React.FC = () => {
  return (
    <section
      id="acervo-natal"
      className="relative w-full bg-white py-16 md:py-24 px-4 text-center overflow-hidden border-b border-emerald-950/5"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '700px' }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-5 tracking-tight leading-tight max-w-4xl mx-auto">
          Um acervo completo para você{' '}
          <span className="relative text-red-600 inline-block">
            aproveitar a temporada antes que ela passe
            <span className="absolute -bottom-1 left-0 w-full h-1 md:h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-red-600" />
          </span>
        </h2>

        <div className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
          <p>
            Tenha acesso a uma coleção com 100 modelos STL Natalinos para imprimir, produzir e colocar à venda enquanto a procura de fim de ano está no pico mais aquecido.
          </p>
          <p className="mt-4 font-bold text-red-700">No acervo você encontra modelos como:</p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 max-w-5xl mx-auto mb-11">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200/80 rounded-[24px] p-7 md:p-8 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:border-emerald-500/40 transition-all duration-300 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700 mb-5 shadow-xs group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-emerald-800 group-hover:text-white transition-all duration-300">
              <svg className="w-8 h-8 md:w-9 md:h-9 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <h3 className="font-cinzel text-lg md:text-xl font-bold text-[#0F172A] mb-3 leading-snug">
              🎅 Papais Noéis e Personagens Natalinos
            </h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Peças clássicas e chamativas para presentes, decoração e encomendas de alto valor no fim de ano.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200/80 rounded-[24px] p-7 md:p-8 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:border-amber-500/40 transition-all duration-300 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700 mb-5 shadow-xs group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-amber-700 group-hover:text-white transition-all duration-300">
              <svg className="w-8 h-8 md:w-9 md:h-9 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L9 7h2v3H8l3 5H9v3h6v-3h-2l3-5h-3v-3h2L12 2zm0 18c-.55 0-1 .45-1 1v1h2v-1c0-.55-.45-1-1-1z" />
              </svg>
            </div>
            <h3 className="font-cinzel text-lg md:text-xl font-bold text-[#0F172A] mb-3 leading-snug">
              🎄 Enfeites e Decorações de Natal
            </h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Modelos para árvores, mesas e ambientes residenciais e comerciais, perfeitos para kits decorativos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200/80 rounded-[24px] p-7 md:p-8 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:border-red-500/40 transition-all duration-300 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-red-50 border border-red-200/60 flex items-center justify-center text-red-700 mb-5 shadow-xs group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-800 group-hover:text-white transition-all duration-300">
              <svg className="w-8 h-8 md:w-9 md:h-9 fill-current" viewBox="0 0 24 24">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.65-.5-.65C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1h-2.22l.53-.71C13.56 4.49 14.24 4 15 4zM9 4c.76 0 1.44.49 1.69 1.29l.53.71H9c-.55 0-1-.45-1-1s.45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.78V14h2V8.78L15.38 12 17 10.83 14.92 8H20v6z" />
              </svg>
            </div>
            <h3 className="font-cinzel text-lg md:text-xl font-bold text-[#0F172A] mb-3 leading-snug">
              🎁 Presentes e Peças Temáticas
            </h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Itens criativos para lembrancinhas, encomendas e presentes sazonais com forte apelo de compra por impulso.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          <p className="text-base sm:text-lg md:text-xl font-medium text-slate-800 leading-relaxed">
            E isso é apenas parte do acervo. Você recebe modelos prontos para imprimir, anunciar e lucrar enquanto essa grande oportunidade anual está em alta.
          </p>
        </div>
      </div>
    </section>
  );
};
