import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px 20px",
        backgroundColor: "#0044ff",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          🛍️ Estilo Único
        </Link>
      </div>

      {/* Navegação */}
      <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          Carrinho
        </Link>

        {!user && (
          <Link to="/auth" style={{ color: "white", textDecoration: "none" }}>
            Login / Registrar
          </Link>
        )}

        {user && (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span style={{ color: "white", fontWeight: "bold" }}>
              Bem-vindo, {user.username}!
            </span>
            <button
              onClick={logout}
              style={{
                background: "#dc3545",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                color: "white",
                cursor: "pointer"
              }}
            >
              Sair
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
