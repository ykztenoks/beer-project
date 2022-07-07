import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ButtonBack } from "../../Components/ButtonBack";
import { ReviewForm } from "../../Components/ReviewForm";
import style from "./style.module.css";

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
    <div className={style.beerdetail}>
      <ButtonBack />
      <div className={style.textblock}>
        <div className={style.textcontent}>
          <h1>{beerDetail.name} </h1>
          <h4>Desde: {beerDetail.year}</h4>
          <h2>Tipo: {beerDetail.style}</h2>
          <h4>Ibu (Índice de amargor): {beerDetail.ibu}</h4>
          <h4>Teor alcóolico: {beerDetail.abv}</h4>
          <h4>Pais de origem: {beerDetail.country}</h4>
          <h4>Descrição: {beerDetail.description}</h4>
          <h4>Sugestão de harmonização: {beerDetail.pair}</h4>
          <Link to={`/edit-beer/${id}`}>
            <button>Editar informações</button>
          </Link>
        </div>
      </div>

      <hr className={style.hr}></hr>
      <h4>Conhece esta cerveja? que tal deixar uma opinião ou sugestão?</h4>
      <ReviewForm />
    </div>
  );
}
