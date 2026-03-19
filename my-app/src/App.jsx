import Contador from "./components/Contador";
import Saudacao from "./components/Saudacao";
import Cadastro from "./components/Cadastro";
import ListaNomes from "./components/ListaNomes";
import CadastroCompleto from "./components/CadastroCompleto";
import ContadorHistorico from "./components/ContadorHistorico";
import Tarefas from "./components/Tarefas";

function App() {
  return (
    <div>
      <h1>Lista de Exercícios React</h1>

      <Contador />
      <Saudacao />
      <Cadastro />
      <ListaNomes />
      <CadastroCompleto />
      <ContadorHistorico />
      <Tarefas />
    </div>
  );
}

export default App;
