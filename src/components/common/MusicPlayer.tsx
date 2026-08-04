import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  // Control Play / Pause
  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  // Iniciar música desde cualquier parte de la app
  useEffect(() => {
    const startMusic = () => {
      if (!audioRef.current) return;

      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    };

    window.addEventListener("startMusic", startMusic);

    return () => {
      window.removeEventListener("startMusic", startMusic);
    };
  }, []);

  // Iniciar música con el primer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (playing) return;

      if (!audioRef.current) return;

      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});

      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [playing]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/Un Pacto Con Dios.mp3"
        loop
      />

      <button
        onClick={() => setPlaying(!playing)}
        className="
          fixed
          bottom-6
          right-6
          z-50
          rounded-full
          bg-slate-900
          p-4
          text-white
          shadow-xl
          transition
          hover:scale-105
        "
      >
        {playing ? <Pause size={22} /> : <Play size={22} />}
      </button>
    </>
  );
}