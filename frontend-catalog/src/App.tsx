import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/ProductCart";
import Header from "./components/Header"; 
import AuthPage from "./pages/AuthPage"; 
import { CartProvider } from "./context/CartContext"; // importa o provider do carrinho

function App() {
  return (
    <CartProvider>
      <div>
        <Header /> {/* Header aparece em todas as páginas */}
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<ProductList />} />

          {/* Rota dinâmica para detalhes */}
          <Route path="/products/:id" element={<ProductDetail />} />

          {/* Carrinho */}
          <Route path="/cart" element={<Cart />} />

          {/* Página de autenticação (login + registro) */}
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
