import React from 'react';
import { CHECKOUT_URLS } from '../data/landingData';

interface BasicDiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BasicDiscountModal: React.FC<BasicDiscountModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xs sm:max-w-sm p-0.5 sm:p-1 rounded-[22px] bg-gradient-to-br from-[#FFE494] via-[#D41C2C] to-[#0E3A24] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(247,208,112,0.3)] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#190507] rounded-[20px] p-3 sm:p-4 md:p-5 flex flex-col items-center text-center relative max-h-[95vh]">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors text-sm font-bold cursor-pointer z-30"
            aria-label="Fechar janela"
          >
            ✕
          </button>

          {/* Badge */}
          <div className="inline-flex items-center gap-1 bg-[#D41C2C] text-white text-[9px] sm:text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1 shadow">
            <span>🚨</span>
            <span>OFERTA EXCLUSIVA</span>
          </div>

          {/* Title */}
          <h3 className="font-cinzel text-base sm:text-lg font-black text-white mb-0.5 leading-tight">
            Leve o <span className="text-[#F7D070]">Plano Completo</span> por{' '}
            <span className="text-[#F7D070] underline decoration-[#D41C2C]">R$ 18,90!</span>
          </h3>

          <p className="text-[11px] sm:text-xs text-white/90 leading-tight mb-1.5 px-1">
            Pague apenas <strong className="text-[#F7D070]">+R$ 8,00 de diferença</strong> e
            desbloqueie os +200 STLs + 3 Bônus + Acesso Vitalício!
          </p>

          <div className="w-full bg-white/5 border border-white/10 rounded-lg py-1 px-2 text-center mb-1.5 text-[10px] sm:text-[11px] text-white/95">
            <span>✓ +200 STLs de Natal • ✓ 3 Bônus • ✓ Grupo VIP • Vitalício</span>
          </div>

          {/* Pricing Row */}
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <span className="text-white/50 line-through text-[11px] font-semibold">De R$ 29,90</span>
            <span className="text-[10px] uppercase tracking-wider text-[#F7D070] font-bold">
              POR APENAS:
            </span>
            <span className="font-cinzel text-2xl sm:text-3xl font-black text-[#25D366] leading-none">
              R$ 18,90
            </span>
          </div>

          {/* Buttons */}
          <div className="w-full flex flex-col gap-1.5">
            {/* 18,90 Checkout */}
            <a
              href={CHECKOUT_URLS.basicDiscountPopup}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="animate-pulse-green w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#1EB954] via-[#22C55E] to-[#15803D] hover:from-[#22C55E] hover:to-[#166534] text-white font-black text-xs uppercase tracking-wide shadow-md border border-white/80 transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>✅</span>
              <span>SIM! QUERO O COMPLETO POR R$ 18,90</span>
            </a>

            {/* 10,90 Checkout */}
            <a
              href={CHECKOUT_URLS.basic}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full py-1.5 px-3 rounded-xl bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#991B1B] hover:from-[#DC2626] hover:to-[#7F1D1D] text-white/90 font-bold text-[10px] sm:text-[11px] uppercase tracking-wide border border-white/20 transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>❌</span>
              <span>NÃO, QUERO APENAS O BÁSICO (R$ 10,90)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
