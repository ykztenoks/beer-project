
import { Link } from "react-router-dom";
import { SearchBar } from "../../Components/SearchBar";
import { NavBar } from "../../Components/NavBar";
import style from "./style.module.css";
import beermug from "../../Assets/images/pixil-frame-0 (4).png";
export function Header() {
  return (
    <div className={style.header}>
      <img
        src={beermug}
        alt="beermug"
        style={{ width: "60px", height: "60px" }}
      />
      <div className={style.hr}>
        <div className={style.hr2}></div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className={style.title}>BeeryGood.</h1>
        </Link>
      </div>
      <NavBar />

      <SearchBar />
    </div>
  );
}
