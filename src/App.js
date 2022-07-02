import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { BeerDetail } from "./Pages/BeerDetail";
import { BeerList } from "./Pages/BeerList";
import { CreateBeer } from "./Pages/CreateBeer";
import { AboutUs } from "./Pages/AboutUs";
import { Error } from "./Pages/Error";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer-detail" element={<BeerDetail />} />
        <Route path="/beer-list" element={<BeerList />} />
        <Route path="/create-beer" element={<CreateBeer />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
