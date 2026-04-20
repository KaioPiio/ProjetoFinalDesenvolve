import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/ProductDetail.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="loading">Carregando...</p>;

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="description">{product.description}</p>
        <p className="price">Preço: ${product.price}</p>
        <button className="add-btn">Adicionar ao Carrinho</button>
      </div>
    </div>
  );
}

export default ProductDetail;
