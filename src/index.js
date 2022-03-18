import React from "react";
import reactDOM from "react-dom";
import "./componentes/styles/style.css";
import "./componentes/styles/reset.css";
import TelaInicial from "./componentes/TelaInicial";
function App(){
    return(
        <>
         <TelaInicial  texto="Iniciar Recall!"/>
        </>
    )
}
reactDOM.render(<App />,document.querySelector(".root"))