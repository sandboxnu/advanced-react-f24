import { useState } from 'react';
import { useEffect } from 'react';

/**
 * This custom hook returns the number of profile views for a given first name.
 * @param firstName The first name of the profile to get the number of views for
 * @returns The number of views for the given profile
 */
export const useProfileViews = (firstName: string) => {
  // TODO: Implement useProfileViews hook
  const [views, setViews] =  useState<Record<string, number>>({});
  useEffect(() => {
    setViews((prevViews) => ({
      ...prevViews,
      [firstName]: (prevViews[firstName] || 0) + 1,
    }));
  }, [firstName]); // Runs only when `firstName` changes

  return views[firstName] || 0;
};
