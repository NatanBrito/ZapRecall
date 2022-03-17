import react from "react"
import BotaoIniciar from "./BotaoIniciar"
import LogoNome from "./LogoNome"
export default function Tela1(){
       const[inicioRecall,setInicioRecall]=react.useState(true)
      if(inicioRecall === true){
          return(
            <>
            <LogoNome />
            <BotaoIniciar  texto="Iniciar Recall!"/> 
           </>)
          
      } else {
          return (<h1>aa</h1>)
      }

}