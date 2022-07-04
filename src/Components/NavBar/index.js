import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <Link to="/beer-list">
        <button>Lista de cervejas</button>
      </Link>
      <Link to="/about-us">
        <button>Sobre nós</button>
      </Link>
      <Link to="/create-beer">
        <button>Adicione uma cerveja!</button>
      </Link>
    </div>
  );
}
