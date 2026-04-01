import { useState } from "react";

export default function Ex02SemRecarregamento() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Título: ${titulo}\nAutor: ${autor}`);
  }

  return (
    <div className="card">
      <h2>Ex02 — Sem Recarregamento</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Título do livro"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          placeholder="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
