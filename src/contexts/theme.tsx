import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./themeContext";

export const ThemeProviderComponentCustom = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeName, setThemeName] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Only update theme if no manual theme is set, and only on mount
    if (!localStorage.getItem("themeName")) {
      // Use setTimeout to avoid cascading renders
      setTimeout(() => {
        setThemeName(mediaQuery.matches ? "dark" : "light");
      }, 0);
    }

    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("themeName")) {
        setThemeName(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const toggleTheme = () => {
    setThemeName((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("themeName", next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProviderComponentCustom.propTypes = {
  children: PropTypes.node.isRequired,
};
