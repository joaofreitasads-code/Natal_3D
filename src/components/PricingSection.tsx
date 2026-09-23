import React, { useState } from 'react';
import { CatholicUpsellModal } from './CatholicUpsellModal';
import { BasicDiscountModal } from './BasicDiscountModal';

export const PricingSection: React.FC = () => {
  const [isCatholicModalOpen, setIsCatholicModalOpen] = useState(false);
  const [isBasicDiscountModalOpen, setIsBasicDiscountModalOpen] = useState(false);

  // Format tomorrow's date dynamically
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formattedTomorrow = tomorrow.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <>
      <section
        id="sim"
        className="relative w-full py-16 md:py-28 px-4 overflow-hidden"
        style={{
          background:
            'radial-gradient(at 50% 18%, rgba(220, 38, 38, 0.22) 0%, rgba(6, 36, 25, 0.98) 55%, rgb(3, 20, 14) 100%), linear-gradient(rgb(7, 43, 30) 0%, rgb(3, 20, 14) 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.15) 1.2px, transparent 0px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-white text-center mb-2 tracking-tight uppercase">
            ESCOLHA SEU ACESSO
          </h2>
          <p className="text-sm sm:text-base text-slate-300 text-center mb-10 md:mb-14 max-w-xl font-normal">
            Inicie sua produção e vendas de modelos 3D natalinos agora mesmo.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-4xl items-stretch">
            {/* Basic Plan */}
            <div className="lg:col-span-5 bg-black/45 border border-white/15 rounded-[22px] p-6 sm:p-8 flex flex-col justify-between text-left shadow-xl backdrop-blur-md relative transition-all duration-300 hover:border-white/25">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-extrabold mb-3">
                  PLANO BÁSICO
                </h3>
                <div className="mb-8">
                  <span className="font-cinzel text-3xl sm:text-4xl font-black text-white tracking-tight">
                    R$ 10,90
                  </span>
                  <span className="block text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-1">
                    PAGAMENTO ÚNICO
                  </span>
                </div>

                <ul className="flex flex-col gap-4 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-500 font-bold shrink-0">✓</span>
                    <span>Pack com +100 arquivos STL</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-slate-400">
                    <span className="text-slate-500 font-bold shrink-0">✓</span>
                    <span>Sem os Bônus inclusos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-500 font-bold shrink-0">✓</span>
                    <span>6 meses de acesso</span>
                  </li>
                </ul>
              </div>

              <div className="pt-10">
                <button
                  type="button"
                  onClick={() => setIsBasicDiscountModalOpen(true)}
                  className="block w-full py-3.5 px-4 rounded-xl border border-slate-700 hover:border-slate-500 bg-transparent hover:bg-slate-800/60 text-slate-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 text-center cursor-pointer active:scale-98"
                >
                  COMEÇAR PELO BÁSICO
                </button>
              </div>
            </div>

            {/* Full Plan (Featured) */}
            <div className="lg:col-span-7 relative p-1 rounded-[26px] bg-gradient-to-br from-amber-300 via-red-500 to-emerald-500 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_45px_rgba(245,158,11,0.35)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-300 via-red-500 to-emerald-600 text-white font-black text-[11px] sm:text-xs px-5 py-1.5 rounded-full uppercase tracking-wider shadow-lg whitespace-nowrap z-20 flex items-center gap-1.5 border border-white/80">
                <span>🏆</span>
                <span>MAIS ESCOLHIDO</span>
              </div>

              <div className="bg-white rounded-[22px] p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
                <h3 className="font-extrabold text-sm sm:text-base text-slate-950 tracking-wide uppercase mt-1 mb-2">
                  PACK VIRAL NATALINO™ COMPLETO
                </h3>

                <div className="w-full max-w-[340px] sm:max-w-[400px] my-2 mx-auto flex items-center justify-center">
                  <img
                    alt="Pack 3D Natalino Completo"
                    className="w-full h-auto max-h-[260px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)] block"
                    loading="lazy"
                    decoding="async"
                    width={500}
                    height={350}
                    referrerPolicy="no-referrer"
                    src="/optimized/VpoLfuU.webp"
                  />
                </div>

                <div className="flex flex-col items-center mt-2 mb-6 w-full">
                  <span className="text-xs sm:text-sm text-slate-400 line-through font-bold">
                    DE R$ 67,00
                  </span>
                  <span className="text-[11px] sm:text-xs font-black text-red-600 uppercase tracking-wider mt-0.5">
                    PAGAMENTO ÚNICO
                  </span>
                  <div className="font-cinzel text-5xl sm:text-6xl font-black text-slate-950 my-1 tracking-tight">
                    R$ 29,90
                  </div>
                  <span className="text-[11px] sm:text-xs font-black text-red-600 uppercase tracking-wider">
                    OU EM ATÉ 4X NO CARTÃO
                  </span>
                </div>

                <div className="w-full text-left flex flex-col gap-2.5 mb-7 text-xs sm:text-sm border-t border-slate-100 pt-5">
                  {[
                    '+200 modelos 3D de Natal organizados e testados',
                    'Bônus 1: Calendário de Vendas para o Natal 3D',
                    'Bônus 2: Kit de Anúncios Prontos para Vender no Natal',
                    'Bônus 3: Guia de Kits e Combos Natalinos Lucrativos',
                    'Comunidade Exclusiva no WhatsApp',
                    'Download e envio imediato',
                    'Acesso vitalício ao material',
                    'Garantia incondicional de 15 dias',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-slate-900 font-semibold">
                      <span className="text-emerald-600 font-black text-base leading-none">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setIsCatholicModalOpen(true)}
                  className="w-full py-4 px-6 rounded-xl bg-[#00C853] hover:bg-[#00B248] text-white font-black text-sm sm:text-base md:text-lg uppercase tracking-wider shadow-[0_10px_25px_rgba(0,200,83,0.4)] transition-all transform hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,200,83,0.5)] text-center cursor-pointer active:scale-98"
                >
                  QUERO O PLANO COMPLETO
                </button>

                <p className="text-[11px] text-slate-500 font-medium mt-3 flex items-center gap-1.5">
                  <span>🔒</span>
                  <span>Compra 100% Segura • Acesso Vitalício Imediato</span>
                </p>
              </div>
            </div>
          </div>

          {/* Urgency Box */}
          <div className="mt-10 w-full max-w-xl bg-black/40 border border-amber-400/30 rounded-2xl p-4 text-center">
            <p className="text-white text-xs sm:text-sm font-semibold mb-1">
              Último dia com desconto do Material Completo
            </p>
            <p className="text-xs sm:text-sm text-slate-200">
              A partir de{' '}
              <span className="animate-pisca font-extrabold text-amber-300 tracking-wide">
                AMANHÃ ({formattedTomorrow})
              </span>
              , o preço será ajustado.
            </p>
          </div>
        </div>
      </section>

      {/* Catholic Upsell Modal (from original site) */}
      <CatholicUpsellModal
        isOpen={isCatholicModalOpen}
        onClose={() => setIsCatholicModalOpen(false)}
      />

      {/* Basic Discount 18,90 Pop up (from original site) */}
      <BasicDiscountModal
        isOpen={isBasicDiscountModalOpen}
        onClose={() => setIsBasicDiscountModalOpen(false)}
      />
    </>
  );
};
