export default function Pergunta({numPergunta}){
    return(
        <div className="pergunta">
        <span>{numPergunta}</span>  
        <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}