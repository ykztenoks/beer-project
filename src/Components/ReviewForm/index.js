import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import style from "./style.module.css";

export function ReviewForm() {
  const [previousReviews, setPreviousReviews] = useState([]);
  // ESSE OLHA O TODO E SALVA O ESTADO DO TODO , ELE TEM QUE PEGAR O GET PRA OLHAR E GUARDAR

  const [beer, setBeer] = useState();
  const { id } = useParams();
  const [form, setForm] = useState({
    // ESSE OLHA O QUE O CARA TA ESCREVENDO E SERVE PRA ADICIONAR NA ARRAY PQ EH OBJ
    username: "",
    score: "",
    comments: "",
  });
  console.log(previousReviews);

  useEffect(() => {
    async function fetchReview() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/mocked-beers/${id}`
        );
        console.log(response);
        setPreviousReviews([...response.data.reviews]);
        setBeer(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReview();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    //ESSE EH PRA GUARDAR ALTERACOOOOESSS
  };

  // const handleDelete = (review) => {
  //   const clone = { reviews: [...previousReviews, form] };
  //   const newReviews = clone.filter((currentReview) => {
  //     return review !== currentReview;
  //   });
  //   setPreviousReviews({ ...previousReviews, [review]: newReviews });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const clone = { reviews: [...previousReviews, form] };
      //na hora de colocar o clone , eh ali que a api vai olhar o reviews e saber pra onde vai
      await axios.put(
        `https://ironrest.herokuapp.com/mocked-beers/${id}`,
        clone
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <h4>Conhece esta cerveja? Que tal deixar uma opinião ou sugestão?</h4>
        <label htmlFor="name-input">Digite seu nome: </label>
        <input
          id="name-input"
          value={form.username}
          type="string"
          name="username"
          onChange={handleChange}
          required
        />
        <label htmlFor="score-input">
          Qual a nota que você dá para esta cerveja? (escolha um numero de 0 a
          5*){" "}
        </label>
        <input
          id="score-input"
          value={form.score}
          type="number"
          name="score"
          onChange={handleChange}
          max="5"
          min="0"
          required
        />
        <label htmlFor="comments-input">
          Digite as suas experiências e recomendações:{" "}
        </label>
        <input
          className={style.commentinput}
          id="comments-input"
          value={form.comments}
          type="string"
          name="comments"
          onChange={handleChange}
          required
        />
        <button className={`${style.btn} btn-warning`} type="submit">
          Envie seu review!
        </button>
      </form>

      {previousReviews.map((currentReview) => {
        console.log(previousReviews);
        return (
          <div key={currentReview._id} className={style.card}>
            <div className="" style={{ width: "18rem" }}>
              <div className="">
                <h5 className="card-title">@{currentReview.username}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Avaliação do usuário: {currentReview.score}
                </h6>
                <div className="card-text">{currentReview.comments}</div>
              </div>
              {/* <Link to={`/edit-review/${beer.data._id}`}>
              <button
                className="btn btn-danger m-3"
                type="button"
                // onClick={handleDelete(currentReview)}
              >
                apague este comentario
              </button>
            </Link> */}
            </div>
          </div>
        );
      })}
    </>
  );
}
