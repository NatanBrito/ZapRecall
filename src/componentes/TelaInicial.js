import { useState } from "react";
import TelaRecalls from "./TelaRecalls";
import LogoNome from "./LogoNome";

export default function TelaInicial({ texto }) {
  const [iniciarRecall, setIniciarRecall] = useState(true);

  return iniciarRecall ? (
    <div className="telaInicial">
      <LogoNome />
      <div className="alinhandoBotao">
        <button
          onClick={() => {
            setIniciarRecall(false);
          }}
          className="configBotao"
        >
          {texto}
        </button>
      </div>
    </div>
  ) : (
    <TelaRecalls />
  );
}
