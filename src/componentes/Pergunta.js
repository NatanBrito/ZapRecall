export default function Pergunta({numPergunta}){
    return(
        <div className="pergunta">
            <div>
        <span>{numPergunta}</span>  
            </div>
            <div className="icon">
        <ion-icon name="play-outline"></ion-icon>
            </div>
        </div>
    )
}
// colocar aqui o componentes pergunta
//colocar pra correr as resposta com .map e indice EX: resposta[0].map()