import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    const startMusic = async () => {
      const audio = audioRef.current;

      if (!audio) return;

      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.error("No fue posible reproducir la música:", error);
      }
    };

    window.addEventListener(
      "startMusic",
      startMusic as EventListener
    );

    return () => {
      window.removeEventListener(
        "startMusic",
        startMusic as EventListener
      );
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/Un Pacto Con Dios.mp3"
        loop
      />

      <button
        onClick={() => setPlaying((prev) => !prev)}
        className="
          fixed
          bottom-6
          right-6
          z-50
          rounded-full
          bg-[#1A1310]
          p-4
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
        "
      >
        {playing ? <Pause size={22} /> : <Play size={22} />}
      </button>
    </>
  );
}