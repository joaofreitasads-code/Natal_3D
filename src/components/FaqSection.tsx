import React, { useState } from 'react';
import { FAQ_LIST } from '../data/landingData';

export const FaqSection: React.FC = () => {
  // First item open by default like in original
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-white py-16 md:py-24 px-4 overflow-hidden border-b border-emerald-950/5"
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] text-center mb-12 tracking-tight">
          Perguntas{' '}
          <span className="relative text-red-600 inline-block">
            Frequentes:
            <span className="absolute -bottom-1 left-0 w-full h-1 md:h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-red-600" />
          </span>
        </h2>

        <div className="flex flex-col gap-4">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`border rounded-[22px] overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-emerald-500/40 bg-[#F8FAF9] shadow-[0_4px_20px_rgba(15,23,42,0.05)]'
                    : 'border-slate-200/90 bg-white hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 font-cinzel font-bold text-base sm:text-lg text-[#0F172A] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[#062419] text-amber-300 shadow-xs'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <svg
                      className="w-4 h-4 fill-none stroke-current stroke-[2.5]"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/60 font-normal animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
