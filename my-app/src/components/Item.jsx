export default function Item({ nome, onRemove }) {
  return (
    <li>
      {nome}
      <button onClick={onRemove}>Remover</button>
    </li>
  );
}