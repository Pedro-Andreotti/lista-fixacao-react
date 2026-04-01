import { useState } from "react";
import Contador from "./components/Contador";
import Saudacao from "./components/Saudacao";
import Cadastro from "./components/Cadastro";
import ListaNomes from "./components/ListaNomes";
import CadastroCompleto from "./components/CadastroCompleto";
import ContadorHistorico from "./components/ContadorHistorico";
import Tarefas from "./components/Tarefas";
import FormularioCadastro from "./components/FormularioCadastro";
import Ex01FormSimples from "./components/Ex01FormSimples";
import Ex02SemRecarregamento from "./components/Ex02SemRecarregamento";
import Ex03FormObjeto from "./components/Ex03FormObjeto";
import Ex04Select from "./components/Ex04Select";
import Ex05Checkbox from "./components/Ex05Checkbox";
import Ex06MultiCheckbox from "./components/Ex06MultiCheckbox";
import Ex07Reset from "./components/Ex07Reset";
import Ex08ExibicaoDinamica from "./components/Ex08ExibicaoDinamica";
import Ex09Validacao from "./components/Ex09Validacao";
import Ex10Desafio from "./components/Ex10Desafio";

function App() {
  const [dark, setDark] = useState(false);

  function toggleTema() {
    const novo = !dark;
    setDark(novo);
    document.documentElement.setAttribute(
      "data-theme",
      novo ? "dark" : "light",
    );
  }

  return (
    <div className="container">
      <button className="theme-toggle" onClick={toggleTema}>
        {dark ? "☀️ Tema Claro" : "🌙 Tema Escuro"}
      </button>
      <h1>Lista de Exercícios React</h1>

      <Contador />
      <Saudacao />
      <Cadastro />
      <ListaNomes />
      <CadastroCompleto />
      <ContadorHistorico />
      <Tarefas />
      <FormularioCadastro />
      <Ex01FormSimples />
      <Ex02SemRecarregamento />
      <Ex03FormObjeto />
      <Ex04Select />
      <Ex05Checkbox />
      <Ex06MultiCheckbox />
      <Ex07Reset />
      <Ex08ExibicaoDinamica />
      <Ex09Validacao />
      <Ex10Desafio />
    </div>
  );
}

export default App;
