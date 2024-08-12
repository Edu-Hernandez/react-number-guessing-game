import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//esto se encarga de renderisar los componentes
ReactDOM.createRoot(document.getElementById("root")!).render(
  //el componente que renderiza es strictmode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
