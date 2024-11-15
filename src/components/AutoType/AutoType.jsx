import { useEffect, useState } from "react";
import "./AutoType.css";

export default function AutoType({ text, start, className, speed }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (start) {
      if (index < text.length) {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex(index + 1);
        }, speed);

        return () => clearTimeout(timer);
      }
    } else {
      setDisplayedText("");
      setIndex(0);
    }
  }, [text, start, index, speed]);

  return (
    <div className={className} id="auto_type text-right">
      {displayedText}
    </div>
  );
}
