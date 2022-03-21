import React from "react"
import Card from "./Card"
import Footer from "./Footer";
export default function Perguntas (){
  const [respondidas,setRespondidas]=React.useState(0)
  const [icons,setIcons]=React.useState([])
  const [erros,setErros]=React.useState(0)
    const cards=
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
    function randomCards(cards) {
        cards.sort(comparador);
      }
      function comparador() {
        return Math.random() - 0.5;
      }
      randomCards(cards);
    return(
    <>   
    {
        cards.map((item,index) =>{
            return(
         <Card key={index+1} numPergunta={index+1}
                     img="./imgs/Vector4.svg" pergunta={item.questao} 
                     resposta={item.resposta}
                     callback={(valor)=> setRespondidas(respondidas + valor)}
                     callbackIcons={(valor)=> setIcons([...icons,valor])}
                     callbackErros={(valor)=> setErros(erros + valor)}  />
                  )
        })
        }
        <Footer respostaNum={respondidas} arrayIcons={icons} numErros={erros}/>
    </>
    )
}
