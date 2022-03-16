import Pergunta from "./Pergunta"
export default function Perguntas (){
    let objetoNumPergunta=["pergunta 1","pergunta 2","pergunta 3","pergunta 4","pergunta 5",
    "pergunta 6","pergunta 7","pergunta 8"]
    return(
    <div className="perguntas">
        {
        objetoNumPergunta.map(item =>{
            return(
         <Pergunta numPergunta={item} />
                  )
        })
        }
    </div>
    )
}