import React from 'react';
import { BONUSES } from '../data/landingData';

export const BonusesSection: React.FC = () => {
  return (
    <section
      id="bonus"
      className="relative w-full bg-white py-16 md:py-24 px-4 overflow-hidden border-b border-red-100/60"
    >
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase mb-5 shadow-md border border-red-500/40">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>🎁 3 BÔNUS EXCLUSIVOS</span>
        </div>

        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0F172A] mb-3 tracking-tight leading-tight">
          E NÃO PARA POR AÍ... TEM MAIS!
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-12">
          Além dos 100 arquivos STL Natalinos, você também vai receber...
        </p>

        {/* 3 Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full mb-8">
          {BONUSES.map((bonus, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-[28px] p-6 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(15,23,42,0.05)] hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(220,38,38,0.1)] hover:border-red-500/40 transition-all duration-300 group"
            >
              {/* Badge Tag */}
              <div className="bg-red-700 text-white font-cinzel font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-5 shadow-xs border border-red-400/40">
                {bonus.badge}
              </div>

              {/* Bonus Cover Image */}
              <div className="w-full max-w-[240px] aspect-square p-1 rounded-[22px] bg-gradient-to-br from-red-500 via-amber-300 to-rose-600 mb-5 shadow-md group-hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-[19px] w-full h-full overflow-hidden">
                  <img
                    alt={bonus.title}
                    className="w-full h-full object-cover rounded-[19px]"
                    loading="lazy"
                    decoding="async"
                    width={240}
                    height={240}
                    referrerPolicy="no-referrer"
                    src={bonus.image}
                  />
                </div>
              </div>

              <h3 className="font-cinzel text-lg md:text-xl font-bold text-[#0F172A] mb-3 leading-snug">
                {bonus.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                {bonus.desc1}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                {bonus.desc2}
              </p>

              <div className="mt-auto w-full pt-4 border-t border-slate-100 flex flex-col items-center">
                <span className="text-sm text-slate-400 line-through font-semibold mb-1">
                  {bonus.oldPrice}
                </span>
                <span className="font-black text-xs sm:text-sm text-red-700 bg-red-50 border border-red-300/70 px-4 py-1 rounded-full uppercase tracking-wider">
                  HOJE: GRÁTIS
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
