import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function RandomBeerCard() {
  const [allBeer, setAllBeer] = useState();
  const [randomBeer2, setRandomBeer2] = useState();
//   const [randomBeerIndex , setRandomBeerIndex] = useState()

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

  let randomBeerIndex = Math.floor(Math.random() * allBeer.length);
    // console.log(randomBeerIndex);
//   setRandomBeer2(allBeer[randomBeerIndex]);
let randombeer = allBeer[randomBeerIndex]
    // console.log(randomBeer2);

  return (
    <>
      {/* <img src={randomBeer2.logo} alt="beerimage" /> */}
      {/* <h1>{randomBeer2.name}</h1> */}
    </>
  );
}
