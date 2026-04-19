import { useCart } from "../context/CartContext";
import "../styles/Cart.css";


function ProductCart() {
  const { cartItems, removeFromCart, clearCart } = useCart() as any;

 if (!cartItems || cartItems.length === 0) {
  return (
    <div className="empty-cart">
      <p>Seu carrinho está vazio</p>
    </div>
  );
}

  const total = cartItems.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Carrinho de Compras</h2>
      {cartItems.map((item: any) => (
        <div key={item.id} className="cart-item">
          {/* Imagem do produto */}
          <img src={item.image} alt={item.title} />

          {/* Detalhes do produto */}
          <div className="details">
            <p><strong>{item.title}</strong></p>
            <p>Quantidade: {item.quantity}</p>
            <p>Preço unitário: R$ {item.price.toFixed(2)}</p>
            <p>Total: R$ {(item.price * item.quantity).toFixed(2)}</p>
          </div>

          {/* Ações */}
          <div className="actions">
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remover</button>
          </div>
        </div>
      ))}

      {/* Resumo do carrinho */}
      <div className="cart-summary">
        <h3>Valor total: R$ {total.toFixed(2)}</h3>
        <button className="clear" onClick={clearCart}>Limpar Carrinho</button>
        <button className="checkout">Finalizar Compra</button>
      </div>
    </div>
  );
}

export default ProductCart;
