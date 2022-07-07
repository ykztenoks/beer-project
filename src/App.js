import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { BeerDetail } from "./Pages/BeerDetail";
import { BeerList } from "./Pages/BeerList";
import { CreateBeer } from "./Pages/CreateBeer";
import { AboutUs } from "./Pages/AboutUs";
import { Error } from "./Pages/Error";
import { Header } from "./Components/Header";
import { EditBeer } from "./Pages/EditBeer";
import { Toaster } from "react-hot-toast";
import style from "./styles.css";
import { RandomBeer } from "./Pages/RandomBeer";
import { RandomBeerCard } from "./Components/RandomBeerCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer-detail/:id" element={<BeerDetail />} />
        {/* <Route path="/edit-review/:id" element={<EditReviewForm />} /> */}
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beer-list" element={<BeerList />} />
        <Route path="/create-beer" element={<CreateBeer />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/error" element={<Error />} />
        <Route path="/edit-beer/:id" element={<EditBeer />} />
      </Routes>
    </div>
  );
}

export default App;
