import { useState } from "react";

export default function Cadastro() {
  const [form, setForm] = useState({ nome: "", email: "" });

  return (
    <div>
      <h2>Cadastro</h2>

      <input
        placeholder="Nome"
        onChange={(e) => setForm({ ...form, nome: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <p>Nome: {form.nome}</p>
      <p>Email: {form.email}</p>
    </div>
  );
}
