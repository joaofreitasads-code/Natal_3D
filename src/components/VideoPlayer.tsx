import React, { useEffect, useRef, useState, useCallback } from 'react';

interface VideoPlayerProps {
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ className = '' }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [progress, setProgress] = useState(0);
  const hlsInstanceRef = useRef<any>(null);

  const videoStream = 'https://cdn.converteai.net/304351db-6700-41f2-96e0-9e2270c2922f/6aa18c886ce493f207c2e487/main.m3u8';
  const posterUrl = '/optimized/thumbnail_83a52e5a5d.webp';

  // Initialize HLS / native stream only on click / interaction
  const initVideo = useCallback(async (shouldPlay = false) => {
    const video = videoRef.current;
    if (!video || hlsInstanceRef.current || video.src) return;

    // Native HLS support (Safari iOS / macOS)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoStream;
      video.muted = false;
      video.volume = 1;
      if (shouldPlay) {
        video.play().catch(() => {});
      }
      return;
    }

    // Chrome / Firefox / Android with dynamic import of Hls.js
    const HlsModule = await import('hls.js');
    const Hls = HlsModule.default;

    if (Hls.isSupported()) {
      const hls = new Hls({
        autoStartLoad: true,
        enableWorker: true,
        capLevelToPlayerSize: true,
        maxBufferLength: 8,
        maxMaxBufferLength: 15,
      });
      hlsInstanceRef.current = hls;
      hls.loadSource(videoStream);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.muted = false;
        video.volume = 1;
        if (shouldPlay) {
          video.play().catch(() => {});
        }
      });
    }
  }, [videoStream]);

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

  const handleStartWithSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    setHasInteracted(true);

    if (!hlsInstanceRef.current && !video.src) {
      await initVideo(true);
    }

    video.muted = false;
    video.volume = 1;
    video.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      // Fallback in case of strict user-gesture blocking
      video.muted = false;
      video.play().catch(() => {});
    });
  };

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false;
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={`w-full max-w-[340px] sm:max-w-[360px] mx-auto ${className}`}>
      <div
        className="relative w-full aspect-[9/16] bg-black rounded-[23px] overflow-hidden cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.65)] border-2 border-amber-400/40 group select-none transition-transform hover:scale-[1.01]"
        onMouseEnter={() => {
          if (!hasInteracted) initVideo(false);
        }}
        onTouchStart={() => {
          if (!hasInteracted) initVideo(false);
        }}
        onClick={!hasInteracted ? handleStartWithSound : handlePlayPause}
      >
        <video
          ref={videoRef}
          playsInline
          preload="none"
          poster={posterUrl}
          width={360}
          height={640}
          className="w-full h-full object-cover"
        />

        {/* YouTube Play Button Overlay (appears before click) */}
        {!hasInteracted && (
          <div className="absolute inset-0 bg-black/35 hover:bg-black/25 flex flex-col items-center justify-center p-4 z-20 backdrop-blur-[0.5px] transition-all duration-300">
            {/* Glowing ring behind the YouTube button */}
            <div className="relative group/btn flex flex-col items-center cursor-pointer">
              <div className="absolute inset-0 bg-red-600/30 rounded-[28px] blur-xl animate-pulse pointer-events-none" />

              {/* YouTube Official Logo SVG */}
              <div className="relative transform transition-all duration-300 group-hover/btn:scale-110 active:scale-95">
                <svg
                  className="w-20 h-14 sm:w-24 sm:h-17 drop-shadow-[0_12px_30px_rgba(255,0,0,0.7)]"
                  viewBox="0 0 68 48"
                  aria-label="Assistir no YouTube com som"
                >
                  <path
                    d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                    fill="#FF0000"
                  />
                  <polygon points="26,14 45,24 26,34" fill="#FFFFFF" />
                </svg>
              </div>

              {/* Sound prompt banner */}
              <div className="mt-4 bg-[#0a1f18]/90 border border-amber-400/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs sm:text-sm font-extrabold shadow-xl flex items-center gap-2 animate-bounce">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-amber-300 uppercase tracking-wide">Clique para ouvir</span>
                <span className="text-base">🔊</span>
              </div>
            </div>
          </div>
        )}

        {/* Center Pause/Play icon indicator when paused after interaction */}
        {hasInteracted && !isPlaying && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none z-20">
            <div className="w-16 h-16 rounded-full bg-black/60 border border-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-2xl">
              <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Bottom Play/Pause Button */}
        {hasInteracted && (
          <div className="absolute bottom-4 left-4 z-30 flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePlayPause();
              }}
              className="w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-transform active:scale-95 border border-white/20 cursor-pointer"
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
            className="h-full bg-[#FF0000] transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};
