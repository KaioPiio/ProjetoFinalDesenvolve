import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import "../styles/ProductCard.css";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <img src={product.image} alt={product.title} className="product-img" />
        <h3 className="product-title">{product.title}</h3>
      </Link>

      <p className="product-price">Preço: ${product.price}</p>

      <div className="product-actions">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          className="quantity-input"
        />
        <button
          onClick={() =>
            addToCart(
              {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image
              },
              quantity
            )
          }
          className="add-btn"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
