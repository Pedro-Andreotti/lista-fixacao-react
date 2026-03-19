import { useState } from "react";

export default function ContadorHistorico() {
  const [valor, setValor] = useState(0);
  const [historico, setHistorico] = useState([]);

  const incrementar = () => {
    const novo = valor + 1;
    setValor(novo);
    setHistorico([...historico, novo]);
  };

  return (
    <div>
      <h2>Contador com Histórico</h2>
      <p>{valor}</p>

      <button onClick={incrementar}>Incrementar</button>

      <ul>
        {historico.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
}