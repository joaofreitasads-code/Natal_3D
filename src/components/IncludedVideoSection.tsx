import React, { useEffect, useRef, useState, useCallback } from 'react';

export const IncludedVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const hlsInstanceRef = useRef<any>(null);

  const videoStream = 'https://cdn.converteai.net/304351db-6700-41f2-96e0-9e2270c2922f/6aa18c886ce493f207c2e487/main.m3u8';
  const posterUrl = 'https://www.centralprime3d.com.br/images/thumbnail_83a52e5a5d.jpg';

  // Lazy load video stream only when within 300px of viewport or after user gesture
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Initialize HLS / native stream only when needed
  const initVideo = useCallback(async (shouldPlay = false) => {
    const video = videoRef.current;
    if (!video || hlsInstanceRef.current || video.src) return;

    const HlsModule = await import('hls.js');
    const Hls = HlsModule.default;

    if (Hls.isSupported()) {
      const hls = new Hls({
        autoStartLoad: true,
        enableWorker: true,
        capLevelToPlayerSize: true, // Optimizes resolution to actual mobile container size
        maxBufferLength: 10, // Avoids downloading entire video into mobile RAM
        maxMaxBufferLength: 20,
      });
      hlsInstanceRef.current = hls;
      hls.loadSource(videoStream);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.muted = true;
        if (shouldPlay) {
          video.play().catch(() => {});
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoStream;
      video.muted = true;
      if (shouldPlay) {
        video.play().catch(() => {});
      }
    }
  }, [videoStream]);

  // Load video stream when near viewport
  useEffect(() => {
    if (isNearViewport) {
      initVideo(false);
    }
  }, [isNearViewport, initVideo]);

  // Handle timeupdate and playback states
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      if (hlsInstanceRef.current) {
        hlsInstanceRef.current.destroy();
        hlsInstanceRef.current = null;
      }
    };
  }, []);

  const handleToggleSoundAndPlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    setHasInteracted(true);

    if (!hlsInstanceRef.current && !video.src) {
      await initVideo(true);
    }

    video.muted = false;
    video.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
  };

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white py-16 md:py-24 px-4 overflow-hidden border-b border-emerald-950/5"
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* Video Column */}
            <div className="lg:col-span-5 flex flex-col items-center w-full max-w-[340px] mx-auto">
              <div className="flex items-center gap-2 font-bold text-red-700 text-sm md:text-base mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-blink-dot" />
                Assista para conhecer 👇
              </div>

              <div className="w-full">
                <div
                  className="relative w-full aspect-[9/16] bg-black rounded-[23px] overflow-hidden cursor-pointer shadow-2xl group select-none"
                  onClick={!hasInteracted ? handleToggleSoundAndPlay : handlePlayPause}
                >
                  <video
                    ref={videoRef}
                    playsInline
                    preload="metadata"
                    poster={posterUrl}
                    width={340}
                    height={604}
                    className="w-full h-full object-cover"
                  />

                  {/* Audio Overlay Banner (appears until clicked to unmute) */}
                  {!hasInteracted && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 z-20 backdrop-blur-[1px] transition-opacity">
                      <div className="bg-[#521987]/85 border-2 border-white/90 rounded-2xl p-5 text-center text-white max-w-[280px] shadow-2xl animate-pulse">
                        <p className="font-bold text-lg mb-2 leading-tight">Seu vídeo já começou</p>
                        <div className="my-3 flex justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center animate-bounce">
                            <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                            </svg>
                          </div>
                        </div>
                        <p className="font-extrabold text-sm uppercase tracking-wide text-yellow-300">
                          Clique para ouvir 🔊
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Play/Pause Button */}
                  {hasInteracted && (
                    <div className="absolute bottom-4 left-4 z-30 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayPause();
                        }}
                        className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-transform active:scale-95 border border-white/20"
                        aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
                      >
                        {isPlaying ? (
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-black/40 z-30">
                    <div
                      className="h-full bg-[#521987] transition-all duration-300 relative"
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-sm" />
                    </div>
                  </div>
                </div>
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
