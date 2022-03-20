import React from "react"
import Pergunta from "./Pergunta"
import PerguntaResposta from "./PerguntaResposta"
export default function Perguntas (){
    const info=
    [
        {questao:"O que é JSX?",resposta:"Uma extensão de linguagem do JavaScript"},
        {questao:"O React é __ ", resposta:"uma biblioteca JavaScript para construção de interfaces"},
        {questao:" Componentes devem iniciar com __ ",resposta:" letra maiúscula"},
        {questao:"Podemos colocar __ dentro do JSX ",resposta:"expressões"},
        {questao:"O ReactDOM nos ajuda __ ",resposta:"interagindo com a DOM para colocar componentes "},
        {questao:"Usamos o npm para __",resposta:"gerenciar os pacotes necessários e suas dependências"},
        {questao:"Usamos props para __",resposta:"passar diferentes informações para componentes"},
        {questao:"Usamos estado (state) para __ ",resposta:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]
    return(
    <>   
    {
        info.map((item,index) =>{
            return(
         <PerguntaIndice numPergunta={index+1} img="./imgs/Vector4.svg" pergunta={item.questao}/>
                  )
        })
        }
    </>
    )
}
function PerguntaIndice({numPergunta,img,pergunta,resposta}){
    const [chamandoPergunta,setChamandoPergunta]= React.useState(true)
    if(chamandoPergunta){
        return(
            <div className="pergunta">
                <div>
            <span>Pergunta({numPergunta})</span>  
                </div>
                <div className="icon">
            <img onClick={()=>{setChamandoPergunta(false)}} src={img} />
                </div>
            </div>
        )
    } else{return( <PerguntaResposta pergunta={numPergunta} />)
    }
}