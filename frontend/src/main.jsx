import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { outputProvider } from "./context/modelOutputContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <outputProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </outputProvider>
  </React.StrictMode>
);
