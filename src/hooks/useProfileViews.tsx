import { useEffect, useState } from "react";

/**
 * This custom hook returns the number of profile views for a given first name.
 * @param firstName The first name of the profile to get the number of views for
 * @returns The number of views for the given profile
 */
export const useProfileViews = (firstName: string) => {
  // We use the first name as the key
  const [viewsRecord, setViewsRecord] = useState<Record<string, number>>({});

  useEffect(() => {
    // Increment the view count for the given first name
    setViewsRecord((prevViews) => ({
      ...prevViews,
      [firstName]: (prevViews[firstName] ?? 0) + 1,
    }));
  }, [firstName]);

  // Just for debugging purposes
  useEffect(() => {
    console.log("[DEBUG]", `Profile views`, viewsRecord);
  }, [viewsRecord]);

  // Return the number of views for the given first name, or 0 if it doesn't exist
  return viewsRecord[firstName] ?? 0;
};
