import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import { ButtonBack } from "../../Components/ButtonBack";
import { Button } from "bootstrap";
export function BeerList() {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    async function fetchBeer() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/mocked-beers"
        );
        setBeer(response.data[0].beer);
        console.log(response);
        console.log(response.data[0].beer);
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
            <Card beer={currentBeer} />
          </div>
        );
      })}
    </div>
  );
}
