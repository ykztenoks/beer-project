import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import { ButtonBack } from "../../Components/ButtonBack";
import { Link } from "react-router-dom";

export function BeerList() {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    async function fetchBeer() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/mocked-beers"
        );
        setBeer(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBeer();
  }, []);

  return (
    <div>
      <h1>Beer List</h1>
      <ButtonBack />
      {beer.map((currentBeer) => {
        return (
          <div>
            <Link to={`/beer-detail/${currentBeer._id}`}>
              <Card beer={currentBeer} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
