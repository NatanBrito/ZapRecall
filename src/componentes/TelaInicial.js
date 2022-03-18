import react from "react";
import TelaRecalls from "./TelaRecalls";
export default function TelaInicial({texto}){
    const[inicioRecall,setInicioRecall]=react.useState(true)
      if(inicioRecall){
  return(
    <div className="telaInicial">
    <LogoNome />
    <div className="alinhandoBotao">
    <button onClick={()=>{ setInicioRecall(false)}} className="configBotao">{texto}</button>
    </div>
    </div>
  )
  } else {
          return <TelaRecalls />
      }

}
function LogoNome(){
  return(
  <div className="logoName">
          <div className="raioImg">
          <img src="./imgs/logo.png" alt="logo"/>
          </div>
          <div className="escritaTela1">
          <p>ZapRecall</p>
          </div>
          </div>
  )
}