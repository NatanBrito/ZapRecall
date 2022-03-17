import LogoNomePequena from "./LogoNomePequena"
import Perguntas from "./Perguntas";
import PerguntaResposta from "./PerguntaResposta";
export default function TelaRecalls(){
    return(
        <>
        <LogoNomePequena />
               <div className="perguntas">
               {/* <PerguntaResposta /> */}
               <Perguntas />
               </div>
        </>
    )
}