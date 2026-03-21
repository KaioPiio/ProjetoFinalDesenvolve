import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"30px 20px",
            backgroundColor:"#0044ff"
        }}>
            {/*Logo*/}
            <div style={{ fontWeight: "bold", fontSize: "20px"}}>
                <Link to="/" style={{color: "white", textDecoration: "none"}}>
                  🛍️Estilo Unico 
                </Link>
            </div>
            {/*Navegação*/}
            <nav style={{ display: "flex", gap: "20px"}}>
                <Link to="/login" style={{color: "white", textDecoration: "none"}}>
                  Login
                </Link>
                <Link to="/register" style={{color: "white", textDecoration: "none"}}>
                  Register
                </Link>
                <Link to="/cart" style={{color: "white", textDecoration: "none"}}>
                  Cart
                </Link>
            </nav>
        </header>
    );
}

export default Header;