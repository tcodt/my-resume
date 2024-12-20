import { useRef, useState } from "react";
import "./Landing.css";
import { FaPause, FaPlay } from "react-icons/fa";
import useAnimationOnMount from "../../hooks/useAnimationOnMount";
import BgBlur from "../BgBlur/BgBlur";

export default function Landing() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const animate1 = useAnimationOnMount("backInDown");

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Playback prevented by browser:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="mt-32 md:mt-12">
      <div className="relative">
        <BgBlur bgColor="bg-emerald-500" sideY="top-0" sideX="left-0" />
        <BgBlur bgColor="bg-red-500" sideY="bottom-0" sideX="right-0" />
        <div className="flex items-center justify-center relative">
          <div
            className={`relative w-full h-full flex items-center justify-center ${animate1}`}
          >
            <img
              src="/images/html.png"
              alt="Html"
              className={`absolute md:top-0 -top-8 md:left-28 left-6 md:h-28 h-16 object-contain z-10 custom-suspended-animate-1`}
            />
            <img
              src="/images/css.png"
              alt="CSS"
              className={`absolute md:top-0 -top-8 md:right-28 right-6 md:h-28 h-16 object-contain z-10 custom-suspended-animate-2`}
            />
            <img
              src="/images/js.webp"
              alt="JS"
              className={`absolute md:bottom-0 -bottom-8 md:right-28 right-6 md:h-28 h-16 object-contain z-10 custom-suspended-animate-3`}
            />
            <img
              src="/images/react.png"
              alt="React"
              className={`absolute md:bottom-0 -bottom-8 md:left-28 left-6 md:h-28 h-16 object-contain z-10 custom-suspended-animate-4`}
            />
            <img
              src="/images/bootstrap.webp"
              alt="Bootstrap"
              className={`absolute bottom-[35%] md:right-56 right-6 md:h-28 h-16 object-contain z-10 custom-suspended-animate-5`}
            />
            <img
              src="/images/tailwind.webp"
              alt="Tailwind"
              className={`absolute bottom-[35%] md:left-56 left-6 md:h-28 h-16 object-contain z-10 custom-suspended-animate-6`}
            />
            <img
              src="/images/redux.webp"
              alt="Redux"
              className={`absolute -bottom-16 md:left-[45%] left-[40%] md:h-28 h-16 object-contain z-10 custom-suspended-animate-7`}
            />
            <img
              src="/images/me-1.jpg"
              alt="Me Landing"
              className={`rounded-full md:h-[450px] h-[250px] border-8 border-teal-500 p-2 hover:border-emerald-500 transition transform ${
                isPlaying ? "custom-rotate" : ""
              }`}
            />
            <button
              onClick={handlePlay}
              className="absolute md:top-[42%] md:left-[47%] top-[37%] left-[41%] p-4 w-20 h-20 rounded-full bg-white bg-opacity-70 flex items-center justify-center"
            >
              {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} />}
            </button>
            <audio ref={audioRef} src="/music.mp3" loop />
          </div>
        </div>
      </div>
    </section>
  );
}
