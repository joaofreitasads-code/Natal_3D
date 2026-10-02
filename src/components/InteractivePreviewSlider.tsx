import React, { useState, useRef, useEffect } from 'react';
import { PREVIEW_MODELS } from '../data/landingData';

export const InteractivePreviewSlider: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedModelIdx, setSelectedModelIdx] = useState<number | null>(null);

  const videoSrc = 'https://i.imgur.com/EhpvctC.mp4';
  const posterUrl = '/optimized/preview_video_poster.webp';

  const handleStartWithSound = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    setHasInteracted(true);

    try {
      video.muted = false;
      video.volume = 1;
      await video.play();
      setIsPlaying(true);
      setIsMuted(false);
    } catch (err) {
      console.warn("Autoplay with sound prevented, attempting muted fallback:", err);
      try {
        video.muted = true;
        setIsMuted(true);
        await video.play();
        setIsPlaying(true);
      } catch (err2) {
        console.error("Playback failed completely:", err2);
      }
    }
  };

  const handlePlayPause = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Play failed:", err);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if ((video as any).webkitEnterFullscreen) {
      (video as any).webkitEnterFullscreen();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
    };
  }, []);

  return (
    <section
      id="preview-modelos"
      className="relative w-full text-white py-16 md:py-24 px-4 text-center overflow-hidden"
      style={{
        background:
          'radial-gradient(at 50% 15%, rgba(220, 38, 38, 0.18) 0%, rgba(11, 45, 33, 0.96) 60%, rgb(5, 24, 18) 100%), linear-gradient(rgb(9, 38, 27) 0%, rgb(5, 24, 18) 100%)',
      }}
    >
      {/* Background Dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.15) 1.2px, transparent 0px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-[#051812]/90 border border-amber-400/50 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-amber-300 uppercase mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>🎥 VÍDEO DEMONSTRATIVO DAS PEÇAS</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Veja o que você pode começar a{' '}
            <span className="relative text-amber-300 inline-block font-black bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              imprimir hoje:
              <span className="absolute -bottom-1 left-0 w-full h-1 md:h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-red-500" />
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal max-w-3xl mx-auto leading-relaxed mt-4">
            Modelos STL Natalinos prontos para produzir e vender, ideais para montar seu catálogo de fim de ano com peças criativas e de altíssimo valor percebido.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="relative max-w-3xl mx-auto select-none">
          <div className="relative p-[3px] sm:p-1.5 rounded-[26px] bg-gradient-to-br from-amber-300 via-red-500 to-emerald-500 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(16,185,129,0.25)]">
            <div
              className="bg-black rounded-[22px] overflow-hidden aspect-video flex items-center justify-center relative cursor-pointer group"
              onClick={!hasInteracted ? handleStartWithSound : handlePlayPause}
            >
              <video
                ref={videoRef}
                playsInline
                preload="auto"
                poster={posterUrl}
                src={videoSrc}
                width={854}
                height={468}
                className="w-full h-full object-cover block cursor-pointer"
                onClick={!hasInteracted ? handleStartWithSound : handlePlayPause}
              />

              {/* Start overlay with YouTube / Play button (clean transparent backdrop so video image is visible) */}
              {!hasInteracted && (
                <div
                  className="absolute inset-0 bg-transparent hover:bg-black/10 flex flex-col items-center justify-center p-4 z-20 transition-all duration-300 cursor-pointer"
                  onClick={handleStartWithSound}
                >
                  <div className="relative group/btn flex flex-col items-center">
                    <div className="absolute inset-0 bg-red-600/35 rounded-full blur-xl animate-pulse pointer-events-none" />

                    {/* Iconic YouTube / Play button */}
                    <div className="relative transform transition-all duration-300 group-hover/btn:scale-110 active:scale-95">
                      <div className="w-16 h-11 sm:w-20 sm:h-14 bg-[#FF0000] rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(255,0,0,0.6)] border border-white/20">
                        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Sound prompt banner */}
                    <div className="mt-3.5 bg-[#051812]/95 border border-amber-400/60 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs sm:text-sm font-extrabold shadow-xl flex items-center gap-2 animate-bounce">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      <span className="text-amber-300 uppercase tracking-wide">Clique para ver o vídeo com som</span>
                      <span className="text-sm">🔊</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Center Pause/Play indicator when paused after interaction */}
              {hasInteracted && !isPlaying && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none z-20">
                  <div className="w-16 h-16 rounded-full bg-black/70 border border-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-2xl">
                    <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Video Bottom Control Bar (no progress bar, keeping clean controls) */}
              {hasInteracted && (
                <div
                  className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent z-30 transition-opacity duration-300 flex items-center justify-between"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Play/Pause */}
                    <button
                      type="button"
                      onClick={handlePlayPause}
                      className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer backdrop-blur-xs"
                      aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                    >
                      {isPlaying ? (
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                      ) : (
                        <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>

                    {/* Mute/Unmute */}
                    <button
                      type="button"
                      onClick={handleToggleMute}
                      className="h-8 px-3 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center gap-1.5 border border-white/20 transition-all cursor-pointer backdrop-blur-xs text-xs font-semibold"
                      aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                    >
                      {isMuted ? (
                        <>
                          <svg className="w-4 h-4 fill-current text-red-400" viewBox="0 0 24 24">
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                          </svg>
                          <span className="text-red-300">Sem som</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4 fill-current text-amber-300" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                          </svg>
                          <span className="text-amber-300">Com som</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Fullscreen */}
                  <button
                    type="button"
                    onClick={handleFullscreen}
                    className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer backdrop-blur-xs"
                    aria-label="Tela cheia"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mini Preview of STL Models below video */}
        <div className="mt-8 pt-6 border-t border-white/10 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-amber-300 font-bold mb-3">
            ✨ Alguns dos 100 modelos disponíveis para você imprimir:
          </p>
          <div className="grid grid-cols-5 gap-2 sm:gap-3">
            {PREVIEW_MODELS.map((item, idx) => (
              <div
                key={item.id}
                className="relative rounded-xl overflow-hidden aspect-square p-0.5 bg-gradient-to-b from-white/20 to-black/40 border border-white/20 shadow-md group/thumb"
                title={item.title}
              >
                <img
                  alt={`Modelo STL ${item.id}`}
                  className="w-full h-full object-cover rounded-[9px] group-hover/thumb:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  width="120"
                  height="120"
                  src={item.thumb}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA to get models */}
        <div className="mt-8 flex justify-center">
          <a
            href="#sim"
            className="animate-pulse-green inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-700 hover:from-emerald-400 hover:to-green-600 text-white font-extrabold text-xs sm:text-sm py-3 px-6 sm:px-8 rounded-full uppercase tracking-wider shadow-[0_10px_25px_rgba(16,185,129,0.35)] border-2 border-white/90 transition-all transform hover:-translate-y-0.5 hover:scale-[1.02] cursor-pointer"
          >
            <span>QUERO ESSES MODELOS PARA IMPRIMIR</span>
            <svg className="w-4 h-4 stroke-current stroke-[2.5] fill-none shrink-0" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="12 5 19 12 12 19" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
