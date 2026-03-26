import Contador from "./components/Contador";
import Saudacao from "./components/Saudacao";
import Cadastro from "./components/Cadastro";
import ListaNomes from "./components/ListaNomes";
import CadastroCompleto from "./components/CadastroCompleto";
import ContadorHistorico from "./components/ContadorHistorico";
import Tarefas from "./components/Tarefas";
import FormularioCadastro from "./components/FormularioCadastro";

function App() {
  return (
    <div className="container">
      <h1>Lista de Exercícios React</h1>

      <Contador />
      <Saudacao />
      <Cadastro />
      <ListaNomes />
      <CadastroCompleto />
      <ContadorHistorico />
      <Tarefas />
      <FormularioCadastro />
    </div>
  );
}

export default App;
