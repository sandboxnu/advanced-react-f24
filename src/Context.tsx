import { createContext } from 'react';
import { ProfileData } from './common-types';

export const Context = createContext<ProfileData | null>(null);