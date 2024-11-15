import { useState, useEffect } from "react";
import "animate.css";

const useAnimationOnMount = ({ animation, animationRepeat = 1 }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass(
      `animate__animated animate__${animation} animate__${animationRepeat}`
    );
  }, [animation, animationRepeat]);

  return animationClass;
};

export default useAnimationOnMount;
