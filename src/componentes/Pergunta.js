// import React from "react"
// import PerguntaResposta from "./PerguntaResposta"
// export default function Pergunta({numPergunta,img}){
//     const [chamandoPergunta,setChamandoPergunta]= React.useState(true)
//     if(chamandoPergunta){
//         return(
//             <div className="pergunta">
//                 <div>
//             <span>Pergunta({numPergunta})</span>  
//                 </div>
//                 <div className="icon">
//             <img onClick={()=>{setChamandoPergunta(false)}} src={img} />
//                 </div>
//             </div>
//         )
//     } else{return( <PerguntaResposta  />)
//     }
// }
// colocar aqui o componentes pergunta
//colocar pra correr as resposta com .map e indice EX: resposta[0].map()