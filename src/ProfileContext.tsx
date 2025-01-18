import React, { createContext, useContext } from "react";
import { ProfileData } from "./common-types";

export const ProfileContext = createContext<ProfileData | null>(null);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};

