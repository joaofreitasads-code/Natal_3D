import React from 'react';

export const OpportunitySection: React.FC = () => {
  return (
    <section
      id="oportunidade-natal"
      className="relative w-full bg-[#F8FAF9] py-16 md:py-24 px-4 text-center overflow-hidden border-b border-emerald-950/5"
    >
      <div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[340px] md:w-[650px] h-[220px] pointer-events-none"
        style={{
          background:
            'radial-gradient(rgba(16, 185, 129, 0.08) 0%, rgba(220, 38, 38, 0.04) 45%, transparent 75%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-8 md:mb-11 leading-tight tracking-tight">
          O Natal cria uma das melhores oportunidades do ano para{' '}
          <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
            vender com impressão 3D
          </span>{' '}
          🎄
        </h2>

        <div className="w-full max-w-xl mx-auto mb-9 flex justify-center">
          <div className="p-1 rounded-[26px] bg-gradient-to-br from-amber-300/80 via-red-500/60 to-emerald-600/60 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-300">
            <div className="bg-white rounded-[22px] overflow-hidden">
              <img
                alt="Oportunidade de Vendas de Modelos STL no Natal"
                className="w-full h-auto object-cover rounded-[22px] block"
                loading="lazy"
                decoding="async"
                width="576"
                height="576"
                referrerPolicy="no-referrer"
                src="/optimized/0vvwgex_6c03c807ec.webp"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-700 font-normal leading-relaxed">
          <p>
            Quem se antecipa aproveita a alta procura por presentes e decoração natalina para transformar sua impressora 3D em uma máquina de vendas lucrativa no fim do ano.
          </p>
          <p>
            Você recebe os arquivos 100% prontos para fatiar, imprimir e comercializar, preparando seu catálogo com antecedência e lucrando alto na melhor temporada do mercado.
          </p>
        </div>
      </div>
    </section>
  );
};
