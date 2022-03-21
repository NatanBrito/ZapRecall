export default function Footer({respostaNum,arrayIcons,numErros}){
    if(respostaNum === 8 && numErros === 0){
        return(
            <footer>
                <nav >
                 <img src="./imgs/party 2.svg" />
                 <span className="escritaParabens">Parabéns!</span>
             </nav>
             <nav>
                 <span>Você não esqueceu de nenhum flashcard!</span>
             </nav>
             <nav >
                 <span>{respostaNum}/8 CONCLUÍDOS</span>
             </nav>
             <nav>
             {arrayIcons.map((icon,index) =><img key={index} src={icon}/>)}
             </nav>
            </footer>
        )
    } if(respostaNum === 8 && numErros>0){
        return(
            <footer>
                <nav >
                 <img src="./imgs/sad 7.svg" />
                 <span className="escritaParabens">Putz...</span>
             </nav>
             <nav>
                 <span>Ainda faltam alguns...
                  Mas não desanime!</span>
             </nav>
             <nav >
                 <span>{respostaNum}/8 CONCLUÍDOS</span>
             </nav>
             <nav>
             {arrayIcons.map((icon,index) =><img key={index} src={icon}/>)} 
             </nav>
            </footer>
        )
    
    }else{
        return(
            <footer>
             <nav >
                 <span>{respostaNum}/8 CONCLUÍDOS</span>
             </nav>
             <nav className="ultimaNav">
             {arrayIcons.map((icon,index) =><img key={index} src={icon}/>)} 
             </nav>
            </footer>
        )
    }
 
}                 
