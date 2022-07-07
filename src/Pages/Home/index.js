import { Link } from "react-router-dom";
import { SearchBar } from "../../Components/SearchBar";
import { NavBar } from "../../Components/NavBar";
import { Banner } from "../../Components/Banner";
import style from "./style.module.css";
import beermug from "../../Assets/images/pixil-frame-0 (4).png";
import { Header } from "../../Components/Header";
export function Home() {
  return (
    <div className={style.home}>
      <Banner />
    </div>
  );
}
