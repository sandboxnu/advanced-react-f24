import { useState, useEffect } from "react";

const profileViews: Record<string, number> = {};

/**
 * This custom hook returns the number of profile views for a given first name.
 * @param firstName The first name of the profile to get the number of views for
 * @returns The number of views for the given profile
 */
export const useProfileViews = (firstName: string): number => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    if (!profileViews[firstName]) {
      profileViews[firstName] = 0;
    }

    profileViews[firstName] += 1;
    setViews(profileViews[firstName]);
  }, [firstName]);

  return views;
};