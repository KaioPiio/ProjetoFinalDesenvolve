import "../styles/CategoriesBar.css";

interface Props {
  onSelectCategory: (category: string) => void;
}

function CategoriesBar({ onSelectCategory }: Props) {
  return (
    <div className="categories-bar">
      <button onClick={() => onSelectCategory("electronics")}>Eletrônicos</button>
      <button onClick={() => onSelectCategory("jewelery")}>Joias</button>
      <button onClick={() => onSelectCategory("men's clothing")}>Roupas Masculinas</button>
      <button onClick={() => onSelectCategory("women's clothing")}>Roupas Femininas</button>
      <button onClick={() => onSelectCategory("")}>Todos</button>
    </div>
  );
}

export default CategoriesBar;