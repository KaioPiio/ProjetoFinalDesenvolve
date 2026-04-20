import { useCart } from "../context/CartContext";
import "../styles/ProductCart.css";

function ProductCart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <p className="empty-cart">Seu carrinho está vazio.</p>;
  }

  return (
    <div className="cart-container">
      <h2>🛒 Seu Carrinho</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} className="cart-img" />
          <div className="cart-info">
            <h4>{item.title}</h4>
            <p>Quantidade: {item.quantity}</p>
            <p>Preço unitário: ${item.price}</p>
            <p>
              <strong>Total:</strong> ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="remove-btn"
          >
            Remover
          </button>
        </div>
      ))}

      <h3 className="cart-total">
        Total da compra: $
        {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
      </h3>
    </div>
  );
}

export default ProductCart;
