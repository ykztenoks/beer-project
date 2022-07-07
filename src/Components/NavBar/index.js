import { Link } from "react-router-dom";
import style from "./style.module.css";

export function NavBar() {
  return (
    <div className={style.navbar}>
      <Link to="/beer-list">
        <button className={style.btn}>Lista de cervejas</button>
      </Link>
      <Link to="/about-us">
        <button className={style.btn}>Sobre nós</button>
      </Link>
      <Link to="/create-beer">
        <button className={style.btn}>Adicione uma cerveja!</button>
      </Link>
    </div>
  );
}
