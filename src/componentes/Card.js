import PerguntaResposta from "./PerguntaResposta"
import {useState} from "react"
export default function Card({numPergunta,img,pergunta,resposta,callback,callbackIcons,callbackErros}){
    const [chamandoPergunta,setChamandoPergunta]=useState(true)
    if(chamandoPergunta){
        return(
            <div className="pergunta">
                <div>
            <span className="spanPergunta">Pergunta{numPergunta}</span>  
                </div>
                <div className="icon">
            <img onClick={()=>{setChamandoPergunta(false)}} src={img} />
                </div>
            </div>
        )
    } else{return( <PerguntaResposta pergunta={pergunta} 
                    resposta={resposta} numPergunta={numPergunta}
                     chamandoCallback={callback} 
                     chamandoicons={callbackIcons}
                     chamandoErros={callbackErros}  />)
    }
}
