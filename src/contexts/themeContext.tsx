import { createContext } from "react";

interface ThemeContextType {
  themeName: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  themeName: "light",
  toggleTheme: () => {},
});
