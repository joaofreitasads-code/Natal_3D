import React from 'react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: 'Saia na frente antes da alta procura',
      description:
        'Enquanto muitos esperam dezembro chegar para pensar no que produzir, você já começa a preparar e divulgar suas peças com antecedência.',
      icon: (
        <path d="M12 2.5s3.5 2 4.5 5.5c.6 2.1.2 4.3-.8 6.1l4.8 4.8c.8.8.8 2 0 2.8-.8.8-2 .8-2.8 0l-4.8-4.8c-1.8 1-4 1.4-6.1.8C3.3 16.7 1.3 13.2 2.5 12 4.5 10 9 4 12 2.5zm-1 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      ),
      className: '',
    },
    {
      title: 'Amplie seu catálogo sem modelar do zero',
      description:
        'Economize horas e dias de trabalho técnico tendo acesso a uma coleção pronta para fatiar, imprimir e colocar à venda.',
      icon: (
        <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm4-4h-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4z" />
      ),
      className: '',
    },
    {
      title: 'Aproveite o forte apelo do Natal',
      description:
        'Produtos natalinos têm apelo emocional e apelo visual elevado, facilitando a decisão de compra para presentes e decorações.',
      icon: (
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      ),
      className: '',
    },
    {
      title: 'Crie novas oportunidades de faturamento',
      description:
        'Aumente suas chances de vendas oferecendo opções variadas para clientes finais, feiras, lojas e encomendas temáticas.',
      icon: (
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      ),
      className: '',
    },
    {
      title: 'Destaque-se antes dos seus concorrentes',
      description:
        'Quem começa a produzir e divulgar primeiro capta a atenção do público antes do mercado ficar saturado.',
      icon: (
        <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
      ),
      className: 'md:col-span-2 lg:col-span-1',
    },
  ];

  return (
    <section className="relative w-full bg-[#F8FAF9] py-16 md:py-24 px-4 text-center overflow-hidden border-b border-emerald-950/5">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-12 tracking-tight leading-tight max-w-4xl mx-auto">
          Veja como esse pack pode ajudar você a{' '}
          <span className="relative text-red-600 inline-block">
            vender mais durante a temporada de Natal
            <span className="absolute -bottom-1 left-0 w-full h-1 md:h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-red-600" />
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className={`bg-white border border-slate-200/80 rounded-[24px] p-7 md:p-8 flex flex-col items-center text-center shadow-[0_8px_25px_rgba(15,23,42,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:border-emerald-500/40 transition-all duration-300 group ${benefit.className}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700 mb-5 shadow-xs group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-emerald-800 group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  {benefit.icon}
                </svg>
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#0F172A] mb-3 leading-snug">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
