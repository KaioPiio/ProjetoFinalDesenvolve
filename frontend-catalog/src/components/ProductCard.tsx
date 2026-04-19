import { Link } from "react-router-dom";
import { useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    // Aqui você pode integrar com o contexto do carrinho
    console.log(`Adicionado ${quantity}x ${product.title} ao carrinho`);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      {/* Área clicável para detalhes */}
      <Link
        to={`/products/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: "200px", objectFit: "contain" }}
        />
        <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
      </Link>

      <p style={{ fontWeight: "bold" }}>Preço: ${product.price}</p>

      {/* Controles de quantidade e botão de carrinho */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "10px" }}>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          style={{ width: "60px", padding: "5px" }}
        />
        <button
          onClick={addToCart}
          style={{
            flex: 1,
            background: "#0044ff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "8px",
            cursor: "pointer"
          }}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
