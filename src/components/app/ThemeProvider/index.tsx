import React, { ReactNode } from 'react';

import { DarkTheme } from '@/configs/theme/dark';
import { Theme } from '@/types/common';

export interface ThemeProviderProps {
  theme: Theme;
  children?: ReactNode;
};

export const ThemeContext = React.createContext<Theme>(DarkTheme);

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  return (
    <ThemeContext.Provider
      value={{
        ...props.theme,
      }}
    >
      { props.children }
    </ThemeContext.Provider>
  );
};
