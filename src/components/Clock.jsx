import { useState, useEffect } from "react";

function Clock({ initialTime }) {
  const settedHours = new Date().setHours(
    initialTime.substring(11).split(":")[0]
  );
  const [time, setTime] = useState(new Date(settedHours));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevState) => new Date(prevState.getTime() + 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [initialTime]);

  const formattedTime = time.toLocaleTimeString().replaceAll(":", " | ");

  return (
    <div className="py-14 max-w-sm mx-auto bg-light-primary-dark rounded-md">
      <p className="text-5xl text-center">{formattedTime}</p>
    </div>
  );
}

export { Clock };
