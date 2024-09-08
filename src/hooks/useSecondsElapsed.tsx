import { useEffect, useState } from "react";

/**
 * This custom hook returns the number of seconds that have elapsed since the component was mounted.
 * The timer resets when the key changes.
 * @param key The key to use for resetting the timer
 * @returns The number of seconds that have elapsed since the component was mounted
 */
export const useSecondsElapsed = (key: string) => {
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    // Reset the timer when the key changes
    setSecondsElapsed(0);

    const interval = setInterval(() => {
      setSecondsElapsed((prevTime) => prevTime + 1);
    }, 1000);

    // We return a cleanup function to clear the interval when the component is unmounted
    // That way, we don't have multiple intervals running at the same time
    return () => {
      clearInterval(interval);
    };
  }, [key]);

  return secondsElapsed;
};
