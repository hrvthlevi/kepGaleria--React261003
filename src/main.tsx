import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GaleriaProvider } from "./contexts/GaleriaContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* körbeöleljük a providerrel a szülökomponenst */}
    <GaleriaProvider>
      <App />
    </GaleriaProvider>
  </StrictMode>,
);
