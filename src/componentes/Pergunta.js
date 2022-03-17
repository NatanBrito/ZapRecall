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