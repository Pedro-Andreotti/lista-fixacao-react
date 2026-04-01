import { useState } from "react";

const selectStyle = { padding: "10px", borderRadius: "10px", border: "1px solid #ccc", marginRight: "10px", outline: "none" };
const TECNOLOGIAS = ["JavaScript", "Java", "Python", "PHP"];
const INITIAL = { titulo: "", autor: "", categoria: "Frontend", disponivel: false, tecnologias: [] };

export default function Ex09Validacao() {
  const [form, setForm] = useState(INITIAL);
  const [erro, setErro] = useState("");
  const [enviado, setEnviado] = useState(null);

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
    if (!form.titulo || !form.autor) {
      setErro("Título e autor são obrigatórios.");
      return;
    }
    setErro("");
    setEnviado(form);
    setForm(INITIAL);
  }

  return (
    <div className="card">
      <h2>Ex09 — Validação Simples</h2>
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
        {erro && <p style={{ color: "red" }}>{erro}</p>}
        <button type="submit">Enviar</button>
      </form>

      {enviado && (
        <ul>
          <li>Título: {enviado.titulo}</li>
          <li>Autor: {enviado.autor}</li>
          <li>Categoria: {enviado.categoria}</li>
          <li>Disponível: {enviado.disponivel ? "Sim" : "Não"}</li>
          <li>Tecnologias: {enviado.tecnologias.join(", ") || "Nenhuma"}</li>
        </ul>
      )}
    </div>
  );
}
