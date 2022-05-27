import { useEffect, useState } from "react";

const calcTimeleft = (t) => {
  if (!t) return 0;

  const left = t - new Date().getTime();

  if (left < 0) return 0;
  return left;
};

export function useCountDown(endTime) {
  const [end, setEndTime] = useState(endTime);
  const [timeLeft, setTimeLeft] = useState(() => calcTimeleft(end));

  useEffect(() => {
    setTimeLeft(calcTimeleft(end));
    const timer = setInterval(() => {
      const targetLeft = calcTimeleft(end);
      setTimeLeft(targetLeft);

      if (targetLeft === 0) {
        clearInterval(timer);
      }
    });
    return () => clearInterval(timer);
  }, [end]);
  return [timeLeft, setEndTime];
}
