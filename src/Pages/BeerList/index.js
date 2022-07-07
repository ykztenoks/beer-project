import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";

import { Link } from "react-router-dom";
import style from "./style.module.css";

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
    <div className={style.beerlist}>
      <h1 className={style.title}>
        Beer List
        <span role="img" aria-label="beer">
          🍺
        </span>
      </h1>

      <div className={style.beerlistcard}>
        {beer.map((currentBeer) => {
          return (
            <div key={currentBeer._id}>
              <div className={style.card}>
                <Link
                  to={`/beer-detail/${currentBeer._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card beer={currentBeer} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
