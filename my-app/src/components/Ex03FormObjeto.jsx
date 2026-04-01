import { useState } from "react";

export default function Ex03FormObjeto() {
  const [form, setForm] = useState({ titulo: "", autor: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  }

  return (
    <div className="card">
      <h2>Ex03 — Formulário com Objeto</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="titulo"
          placeholder="Título do livro"
          value={form.titulo}
          onChange={handleChange}
        />
        <input
          name="autor"
          placeholder="Autor"
          value={form.autor}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
