
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  initialMinutes: number;
}

const CountdownTimer = ({ initialMinutes }: CountdownTimerProps) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="bg-red-100 rounded-lg p-3 my-4 border-2 border-red-400 max-w-md mx-auto">
      <p className="text-red-600 font-semibold mb-2 text-center">OFERTA EXPIRA EM:</p>
      <div className="countdown-timer">
        <div className="countdown-segment">
          <span>{String(minutes).padStart(2, "0")}</span>
          <span className="countdown-label">min</span>
        </div>
        <span className="text-red-600">:</span>
        <div className="countdown-segment">
          <span>{String(seconds).padStart(2, "0")}</span>
          <span className="countdown-label">seg</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
