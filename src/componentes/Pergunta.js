import React from "react"
import PerguntaResposta from "./PerguntaResposta"
export default function Pergunta({numPergunta}){
    const [chamandoPergunta,setChamandoPergunta]= React.useState(true)
    if(chamandoPergunta){
        return(
            <div className="pergunta">
                <div>
            <span>{numPergunta}</span>  
                </div>
                <div className="icon">
            <ion-icon onClick={()=>{setChamandoPergunta(false)}} name="play-outline"></ion-icon>
                </div>
            </div>
        )
    } else{return( <PerguntaResposta perguntaCard="O que é JSX?" respostaCard="Uma extensão de linguagem do JavaScript" />)
    }
}
// colocar aqui o componentes pergunta
//colocar pra correr as resposta com .map e indice EX: resposta[0].map()