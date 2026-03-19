import { useState } from "react";

export default function Formulario({ adicionar }) {
  const [nome, setNome] = useState("");

  return (
    <div>
      <input value={nome} onChange={(e) => setNome(e.target.value)} />
      <button onClick={() => adicionar(nome)}>Adicionar</button>
    </div>
  );
}
