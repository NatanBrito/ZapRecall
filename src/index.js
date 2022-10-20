import React from "react";
import reactDOM from "react-dom";

import TelaInicial from "./componentes/TelaInicial";

import "./componentes/styles/style.css";
import "./componentes/styles/reset.css";

function App() {
  return <TelaInicial texto="Iniciar Recall!" />;
}
reactDOM.render(<App />, document.querySelector(".root"));
