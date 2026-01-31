import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProviderComponentCustom } from "./contexts/theme.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProviderComponentCustom>
      <App />
    </ThemeProviderComponentCustom>
  </StrictMode>,
);
