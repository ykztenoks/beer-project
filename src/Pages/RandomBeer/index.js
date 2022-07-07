import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function RandomBeer() {
  const [allBeer, setAllBeer] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBeer() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/mocked-beers"
        );
        setAllBeer(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBeer();
  }, []);

  console.log(allBeer.length);

  const randomBeer = Math.floor(Math.random() * allBeer.length);

   navigate(`/beer-detail/${allBeer[randomBeer]._id}`);
   return randomBeer();
}
