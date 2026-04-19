import "../styles/AuthPage.css";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const { login, register, user } = useAuth();
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (isRegister) {
      register({ username, email, password });
    } else {
      login(email, password);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="auth-container">
      <h2>{isRegister ? "Registro" : "Login"}</h2>

      {isRegister && (
        <input
          placeholder="Usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      )}

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {isRegister ? "Registrar" : "Entrar"}
      </button>

      <p>
        {isRegister ? "Já tem conta?" : "Não tem conta?"}{" "}
        <button type="button" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Faça login" : "Registre-se"}
        </button>
      </p>
    </div>
  );
}

export default AuthPage;
