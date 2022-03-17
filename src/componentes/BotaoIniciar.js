import react from "react"
export default function BotaoIniciar({texto}){
    const[inicioRecall,setInicioRecall]=react.useState(true)
      if(inicioRecall === true){
          return(
            <>
            <BotaoIniciar  texto="Iniciar Recall!"/> 
           </>)
          
      } else {
          return (<h1>aa</h1>)
      }
// return(
//     <div className="alinhandoBotao">
//     <button onClick={()=>{ setInicioRecall(false)}} className="configBotao">{texto}</button>
//     </div>
// )
}