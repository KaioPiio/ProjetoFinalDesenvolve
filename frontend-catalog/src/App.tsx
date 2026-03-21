import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/ProductCart";
import Header from "./components/Header"; // Header global

function App() {
  return (
    <div>
      <Header /> {/* Header aparece em todas as páginas */}
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<ProductList />} />

        {/* Rota dinâmica para detalhes */}
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* Carrinho */}
        <Route path="/cart" element={<Cart />} />

        {/* Login e Registro (placeholders por enquanto) */}
        <Route path="/login" element={<div>Página de Login</div>} />
        <Route path="/register" element={<div>Página de Registro</div>} />
      </Routes>
    </div>
  );
}

export default App;
