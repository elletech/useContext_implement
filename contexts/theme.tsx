import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react';

export type Theme = {
  foreground: string;
  background: string;
};

const defaultContext: Theme = {
  foreground: 'white',
  background: 'black',
};

const themeContext = createContext<Theme>(defaultContext);
const setThemeContext = createContext<Dispatch<SetStateAction<Theme>>>(
  () => undefined,
);

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultContext);

  return (
    <themeContext.Provider value={theme}>
      <setThemeContext.Provider value={setTheme}>
        {children}
      </setThemeContext.Provider>
    </themeContext.Provider>
  );
};

export const useThemeValue = () => useContext(themeContext);
export const useThemeSetValue = () => useContext(setThemeContext);
