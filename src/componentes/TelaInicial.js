import BotaoIniciar from "./BotaoIniciar"
import LogoNome from "./LogoNome"
import LogoNomePequena from "./LogoNomePequena"
import Perguntas from "./Perguntas";
import Footer from "./Footer";
export default function TelaInicial(){
    return(
       <body>
           <div className="telaInicial">
               {/* <LogoNome />
               <BotaoIniciar texto="Iniciar Recall!"/> */}
               <LogoNomePequena />
               <Perguntas />
               <Footer />
               
           </div>

       </body>
    )
}