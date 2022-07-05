import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonBack } from "../../Components/ButtonBack";
import { ReviewForm } from "../../Components/ReviewForm";

export function BeerDetail() {
  const { id } = useParams();
  const [beerDetail, setBeerDetail] = useState({});

  useEffect(() => {
    async function fetchBeerDetail() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/mocked-beers/${id}`
        );
        // console.log(response.data);
        setBeerDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBeerDetail();
  }, [id]);

  return (
    <div>
      <ButtonBack />
      <h1>{beerDetail.name} </h1>
      <h4>Desde: {beerDetail.year}</h4>
      <h2>Tipo: {beerDetail.style}</h2>
      <h4>Ibu (Índice de amargor): {beerDetail.ibu}</h4>
      <h4>Teor alcóolico: {beerDetail.abv}</h4>
      <h4>Pais de origem: {beerDetail.country}</h4>
      <h4>Descrição: {beerDetail.description}</h4>
      <h4>Sugestão de harmonização: {beerDetail.pair}</h4>

      <ReviewForm />
    </div>
  );
}
