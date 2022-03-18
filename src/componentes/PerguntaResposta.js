import React from "react"
export default function PerguntaResposta({perguntaCard,respostaCard}){
    const resposta=
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
    const [chamandoResposta,setChamandoResposta]=React.useState(true)
    if(chamandoResposta){
    return(
        <div className="perguntaResposta">
            <div className="cardPergunta">
            <div className="escritaPerguntaResposta">
            <span>{perguntaCard}</span>
            </div>
            </div>
            <div className="imgPerguntaResposta">
            <img   onClick={()=>{setChamandoResposta(false)}}src="./imgs/Vector.svg"/>
            </div>
        </div>
    )} else{
        return(
        <div className="perguntaResposta">
            <div className="cardPergunta">
            <div className="escritaPerguntaResposta">
            <span>{respostaCard}</span>
            </div>
            </div>
            <div className="botoesResposta">
                <button className="botaoresposta vermelho">Não lembrei</button>
                <button className="botaoresposta amarelo">Quase não lembrei</button>
                <button className="botaoresposta verde">Zap!</button>
            </div>
        </div>
        )
    }
}