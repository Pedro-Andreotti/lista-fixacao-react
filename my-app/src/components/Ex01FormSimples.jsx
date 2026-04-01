import { useState } from "react";

export default function Ex01FormSimples() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  return (
    <div className="card">
      <h2>Ex01 — Formulário Simples</h2>
      <form onSubmit={() => console.log({ titulo, autor })}>
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
