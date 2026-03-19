import { useState } from "react";

export default function CadastroCompleto() {
  const [usuarios, setUsuarios] = useState([]);
  const [form, setForm] = useState({ nome: "", email: "" });

  const salvar = () => {
    if (!form.nome) return alert("Nome obrigatório!");

    setUsuarios([...usuarios, form]);
    setForm({ nome: "", email: "" });
  };

  return (
    <div>
      <h2>Cadastro de Usuários</h2>

      <input
        placeholder="Nome"
        value={form.nome}
        onChange={(e) => setForm({ ...form, nome: e.target.value })}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <button onClick={salvar}>Salvar</button>

      <ul>
        {usuarios.map((u, i) => (
          <li key={i}>
            {u.nome} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
