import Footer from "./Footer";
import LogoNomePequena from "./LogoNomePequena"
import Perguntas from "./Perguntas";
import PerguntaResposta from "./PerguntaResposta";
export default function TelaRecalls(){
    return(
        <div className="telaInicial">
        <LogoNomePequena />
               <div className="perguntas">
               {/* <PerguntaResposta /> */}
               <Perguntas />
               </div>
                <Footer />
        </div>

    )
}