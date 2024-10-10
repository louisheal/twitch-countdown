import { useCountdown } from "../hooks/useCountdown"

const Timer = ({ time }) => {
  const [minutes, seconds] = useCountdown(time);

  return (
    <p>{minutes}:{seconds}</p>
  );
}

export default Timer;