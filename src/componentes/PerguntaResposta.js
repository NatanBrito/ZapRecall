import { useState } from "react"
export default function PerguntaResposta({pergunta,resposta,numPergunta,chamandoCallback,chamandoicons,chamandoErros}){
    const [chamandoResposta,setChamandoResposta]=useState(0)
    if(chamandoResposta===  0){
    return(
        <div className="perguntaResposta">
            <div className="cardPergunta">
            <div className="escritaPerguntaResposta">
            <span>{pergunta}</span>
            </div>
            </div>
            <div className="imgPerguntaResposta">
            <img   onClick={()=>{setChamandoResposta(1)}}src="./imgs/Vector.svg"/>
            </div>
        </div>
    )} if(chamandoResposta === 1){
        return(
        <div className="perguntaResposta">
            <div className="cardPergunta">
            <div className="escritaPerguntaResposta">
            <span>{resposta}</span>
            </div>
            </div>
            <div className="botoesResposta">
                <button  onClick={()=>{setChamandoResposta(3) 
                                       chamandoCallback(1)
                                       chamandoicons("./imgs/Vector1.svg" )
                                       chamandoErros(1)
                                       }}className="botaoresposta vermelho">Não lembrei</button>
                <button  onClick={()=>{setChamandoResposta(4)
                                       chamandoCallback(1)
                                       chamandoicons("./imgs/Vector2.svg") 
                                       }}className="botaoresposta amarelo">Quase não lembrei</button>
                <button  onClick={()=>{setChamandoResposta(5)
                                       chamandoCallback(1)
                                       chamandoicons("./imgs/Vector3.svg") }} className="botaoresposta verde">Zap!</button>
            </div>
        </div>
        )
    } if(chamandoResposta === 3){
        return(
            <div className="pergunta">
            <div>
        <span className="spanPergunta red"><s>Pergunta({numPergunta})</s></span>  
            </div>
            <div className="icon">
        <img  src="./imgs/Vector1.svg" />
            </div>
        </div>
        )
    } 
    if(chamandoResposta === 4){
        return(
            <div className="pergunta">
            <div>
        <span className=" spanPergunta yellow "><s>Pergunta({numPergunta})</s></span>  
            </div>
            <div className="icon">
        <img  src="./imgs/Vector2.svg" />
            </div>
        </div>
        )
    } if(chamandoResposta === 5){
        return(
            <div className="pergunta">
            <div>
        <span className="spanPergunta green"><s>Pergunta({numPergunta})</s></span>  
            </div>
            <div className="icon">
        <img  src="./imgs/Vector3.svg" />
            </div>
        </div>
        )
    }
}