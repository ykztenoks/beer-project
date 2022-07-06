import { Link } from "react-router-dom";
import { SearchBar } from "../../Components/SearchBar";
import { NavBar } from "../../Components/NavBar";
import { Banner } from "../../Components/Banner";
import style from "./style.module.css";

export function Home() {
  return (
    <div className={style.home}>
      <div className={style.header}>
        <h1 className={style.title}>Home</h1>
        <NavBar />
        <SearchBar />
      </div>      
      <Banner />
    </div>
  );
}
