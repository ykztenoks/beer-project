import { Link } from "react-router-dom";
export function ButtonBack() {
  return (
    <Link to="/">
      <button className="btn-warning">Voltar</button>
    </Link>
  );
}
