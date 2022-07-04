import { Link } from "react-router-dom";
import { SearchBar } from "../../Components/SearchBar";
import { NavBar } from "../../Components/NavBar";
import { Banner } from "../../Components/Banner";
export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <SearchBar />
      <NavBar />
      <Banner />
    </div>
  );
}
