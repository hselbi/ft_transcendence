import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";
// contexts
import SettingsProvider from "./contexts/SettingsContext";


const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <SettingsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SettingsProvider>
  </React.StrictMode>
);
