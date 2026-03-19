import Item from "./Item";

export default function Lista({ itens, remover }) {
  return (
    <ul>
      {itens.map((nome, index) => (
        <Item key={index} nome={nome} onRemove={() => remover(index)} />
      ))}
    </ul>
  );
}
