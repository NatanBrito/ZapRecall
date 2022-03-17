import react from "react";
import Footer from "./Footer";
import PerguntaResposta from "./PerguntaResposta";
import Tela1 from "./Tela1";
import TelaRecalls from "./TelaRecalls";
export default function TelaInicial(){
    const[inicioRecall,setinicioRecall]=react.useState(true)
    function desativa(){
        setinicioRecall(false)
    }
    return(
       <body>
           <div className="telaInicial">
                
                <Tela1 />
                {/* <TelaRecalls />
               <Footer /> */}
           </div>
       </body>
    )
}