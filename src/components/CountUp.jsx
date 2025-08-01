import { useEffect, useState } from "react";

const useCountUp = (target, duration = 2000, trigger = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const increment = target / (duration / 16);
    let animationFrame;

    const updateCount = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
        cancelAnimationFrame(animationFrame);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [trigger, target, duration]);

  return count;
};

export default useCountUp;
