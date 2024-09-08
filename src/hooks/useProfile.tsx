import { useContext } from "react";
import { ProfileContext } from "../context";

export const useProfile = () => {
  const profile = useContext(ProfileContext);
  //   The default value of the ProfileContext is null, so if the profile is null, we throw an error.
  if (!profile) {
    throw new Error("Profile not found in context");
  }

  return profile;
};
