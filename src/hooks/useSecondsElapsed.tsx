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

    setInterval(() => {
      setSecondsElapsed((prevTime) => prevTime + 1);
    }, 1000);
  }, [key]);

  return secondsElapsed;
};
