import {useState} from "react"
import Footer from "./Footer";
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
               <Perguntas callback={(valor)=> setRespondidas(respondidas + valor)} />
               </div>
               <Footer respostaNum={respondidas} icons="0"/>
               </div>
         

    )
}