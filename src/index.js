import reactDOM from "react-dom";
import "./componentes/style.css";
import "./componentes/reset.css";
import TelaInicial from "./componentes/TelaInicial";

function App(){
    return(
        <>
         <TelaInicial/>
        </>
    )
}

reactDOM.render(<App />,document.querySelector(".root"))