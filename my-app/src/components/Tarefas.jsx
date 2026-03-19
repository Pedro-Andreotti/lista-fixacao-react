import { useState } from "react";

export default function Tarefas() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  const adicionar = () => {
    setLista([...lista, tarefa]);
    setTarefa("");
  };

  const remover = (index) => {
    setLista(lista.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>

      <input value={tarefa} onChange={(e) => setTarefa(e.target.value)} />
      <button onClick={adicionar}>Adicionar</button>

      <p>Você tem {lista.length} tarefas cadastradas</p>

      <ul>
        {lista.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => remover(i)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
