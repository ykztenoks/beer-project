import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { BeerDetail } from "./Pages/BeerDetail";
import { BeerList } from "./Pages/BeerList";
import { CreateBeer } from "./Pages/CreateBeer";
import { AboutUs } from "./Pages/AboutUs";
import { Error } from "./Pages/Error";
import { EditReviewForm } from "./Pages/EditReview";
import { EditBeer } from "./Pages/EditBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer-detail/:id" element={<BeerDetail />} />
        <Route path="/edit-review/:id" element={<EditReviewForm />} />
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
