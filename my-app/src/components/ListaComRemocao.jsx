import { useState } from "react";

export default function ListaNomes() {
  const [nome, setNome] = useState("");
  const [lista, setLista] = useState([]);

  const adicionar = () => {
    setLista([...lista, nome]);
    setNome("");
  };

  const remover = (index) => {
    setLista(lista.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Lista de Nomes</h2>

      <input value={nome} onChange={(e) => setNome(e.target.value)} />
      <button onClick={adicionar}>Adicionar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}
            <button className="remover" onClick={() => remover(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
