import { useState } from "react";

export default function Saudacao() {
  const [nome, setNome] = useState("");

  return (
    <div>
      <h2>Saudação</h2>
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <p>Olá {nome}</p>
    </div>
  );
}
