import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
      <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px", objectFit: "contain" }} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`}>Ver Detalhes</Link>
    </div>
  );
}

export default ProductCard;
