import { useState } from "react";

const selectStyle = { padding: "10px", borderRadius: "10px", border: "1px solid #ccc", marginRight: "10px", outline: "none" };
const TECNOLOGIAS = ["JavaScript", "Java", "Python", "PHP"];

export default function Ex06MultiCheckbox() {
  const [form, setForm] = useState({ titulo: "", autor: "", categoria: "Frontend", disponivel: false, tecnologias: [] });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (name === "tecnologias") {
      setForm({ ...form, tecnologias: checked ? [...form.tecnologias, value] : form.tecnologias.filter((t) => t !== value) });
    } else {
      setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className="card">
      <h2>Ex06 — Múltiplos Checkboxes</h2>
      <form onSubmit={handleSubmit}>
        <input name="titulo" placeholder="Título do livro" value={form.titulo} onChange={handleChange} />
        <input name="autor" placeholder="Autor" value={form.autor} onChange={handleChange} />
        <select name="categoria" value={form.categoria} onChange={handleChange} style={selectStyle}>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Banco de Dados</option>
          <option>Mobile</option>
        </select>
        <div>
          <label>
            <input name="disponivel" type="checkbox" checked={form.disponivel} onChange={handleChange} />
            {" "}Livro disponível para empréstimo
          </label>
        </div>
        <div>
          <p>Tecnologias relacionadas:</p>
          {TECNOLOGIAS.map((tec) => (
            <label key={tec} style={{ marginRight: "10px" }}>
              <input name="tecnologias" type="checkbox" value={tec} checked={form.tecnologias.includes(tec)} onChange={handleChange} />
              {" "}{tec}
            </label>
          ))}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
