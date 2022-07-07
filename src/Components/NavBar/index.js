import { Link } from "react-router-dom";
import style from "./style.module.css";

export function NavBar() {
  return (
    <div className={style.navbar}>
      <Link style={{ textDecoration: "none" }} to="/beer-list">
        <span className={style.btn2}>Lista de cervejas</span>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/about-us">
        <span className={style.btn2}>Sobre nós</span>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/create-beer">
        <span className={style.btn2}>Adicione uma cerveja!</span>
      </Link>
    </div>
  );
}
