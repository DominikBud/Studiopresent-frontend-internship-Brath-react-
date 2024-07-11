import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkModeProvider } from "./contexts/DarkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root-wrapper")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
