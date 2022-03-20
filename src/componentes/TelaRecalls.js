import {useState} from "react"
import LogoNomePequena from "./LogoNomePequena"
import Perguntas from "./Perguntas";
export default function TelaRecalls(){
    // tem que fazer fazer callback aqui pra pegar as perguntas respondidas e adicionar no footer
    // e fazer os icons ir
    const [respondidas,setRespondidas]=useState(0)
    return(
        <div className="telaInicial">
        <LogoNomePequena />
               <div className="perguntas">
               <Perguntas />
               </div>
               <footer>
         <nav>
             <span>{respondidas}/8 CONCLUÍDOS</span>
         </nav>
         
        </footer>
        </div>

    )
}