import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// import redux provider
import Providers from "./features/Provider";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <StrictMode>
      <App />
    </StrictMode>
  </Providers>,
);
