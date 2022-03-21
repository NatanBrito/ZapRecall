export default function Footer({respostaNum,icons}){
    const xx=[1,2,3]
    let arrayIcones=[...icons]
    return(
        <footer>
         <nav >
             <span>{respostaNum}/8 CONCLUÍDOS</span>
         </nav>
         <nav>
         {/* {arrayIcones.map(icon =><h1>{icon}</h1>)}  */}
         </nav>
        </footer>
    )
}                 
