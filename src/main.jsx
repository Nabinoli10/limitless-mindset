import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";                // <-- THIS LINE MUST EXIST
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
