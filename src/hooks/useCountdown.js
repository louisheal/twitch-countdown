import { useEffect, useState } from 'react';

const useCountdown = (duration) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTime(duration);
  }, [duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(prev => prev - 1);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [duration, time]);

  return getReturnValues(time);
};

const getReturnValues = (countDown) => {
  const minutes = String(Math.floor(countDown / 60)).padStart(2, '0');
  const seconds = String(Math.floor(countDown % 60)).padStart(2, '0');

  return [minutes, seconds];
};

export { useCountdown };