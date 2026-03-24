import { useState } from "react";

export default function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <div className="card">
      <h2>Contador: </h2>
      <p>{valor}</p>
      <button onClick={() => setValor(valor + 1)}>Incrementar</button>
      <button onClick={() => setValor(valor - 1)}>Decrementar</button>
    </div>
  );
}
