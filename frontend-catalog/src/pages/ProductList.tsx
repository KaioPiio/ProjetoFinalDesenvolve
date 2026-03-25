import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CategorieBar from "../components/CategoriesBar";


interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>(""); // Estado para categoria selecionada

  useEffect(() => {

    const url = category 
    ? `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}` 
    : "https://fakestoreapi.com/products";
    
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Erro ao buscar produtos:", err));
  }, [category]); // Reexecuta quando a categoria mudar

  if (products.length === 0) return <p>Carregamento...</p>;

  return (
    <div>
      {/* Barra de categorias */}
      <CategorieBar onSelectCategory={setCategory} />

      {/* Lista de produtos */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

  export default ProductList;     
