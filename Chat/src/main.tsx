import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import reportWebVitals from "./reportWebVitals";
import SocketsProvider from './contexts/socket.context.tsx';
// contexts
import SettingsProvider from "./contexts/SettingsContext";

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
  <HelmetProvider>
    <SettingsProvider>
      <SocketsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </SocketsProvider>
    </SettingsProvider>
  </HelmetProvider>
</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
