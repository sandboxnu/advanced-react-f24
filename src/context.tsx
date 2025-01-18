import { createContext } from "react";
import { ProfileData } from "./common-types";

export const ProfileContext = createContext<ProfileData | null>(null);
