
import LogoNomePequena from "./LogoNomePequena"
import Perguntas from "./Perguntas";
export default function TelaRecalls(){
    return(
        <div className="telaInicial">
        <LogoNomePequena />
               <div className="perguntas">
               <Perguntas  />
               </div>
        </div>
    )
}