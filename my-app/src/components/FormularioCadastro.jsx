import { useState } from "react";

function FormularioCadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    cidade: "",
    perfil: "",
    receberNovidades: false,
    observacoes: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className="card">
      <h2>Formulário de Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} />
        </div>
        <div>
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
        </div>
        <div>
          <input name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} />
        </div>
        <div>
          <select
            name="perfil"
            value={form.perfil}
            onChange={handleChange}
            style={{ padding: "10px", borderRadius: "10px", border: "1px solid #ccc", marginRight: "10px", outline: "none" }}
          >
            <option value="">Selecione um perfil</option>
            <option value="usuario">Usuário</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div>
          <label>
            <input name="receberNovidades" type="checkbox" checked={form.receberNovidades} onChange={handleChange} />
            {" "}Receber novidades
          </label>
        </div>
        <div>
          <textarea
            name="observacoes"
            placeholder="Observações"
            value={form.observacoes}
            onChange={handleChange}
            style={{ padding: "10px", borderRadius: "10px", border: "1px solid #ccc", outline: "none", width: "100%", boxSizing: "border-box" }}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <pre style={{ background: "#f5f7fa", padding: "10px", borderRadius: "10px" }}>
        {JSON.stringify(form, null, 2)}
      </pre>
    </div>
  );
}

export default FormularioCadastro;
