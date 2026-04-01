import { useState } from "react";

const selectStyle = { padding: "10px", borderRadius: "10px", border: "1px solid #ccc", marginRight: "10px", outline: "none" };

export default function Ex04Select() {
  const [form, setForm] = useState({ titulo: "", autor: "", categoria: "Frontend" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className="card">
      <h2>Ex04 — Select Controlado</h2>
      <form onSubmit={handleSubmit}>
        <input name="titulo" placeholder="Título do livro" value={form.titulo} onChange={handleChange} />
        <input name="autor" placeholder="Autor" value={form.autor} onChange={handleChange} />
        <select name="categoria" value={form.categoria} onChange={handleChange} style={selectStyle}>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Banco de Dados</option>
          <option>Mobile</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
