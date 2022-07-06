import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function EditReviewForm() {
  const [previousReviews, setPreviousReviews] = useState([]);
  // ESSE OLHA O TODO E SALVA O ESTADO DO TODO , ELE TEM QUE PEGAR O GET PRA OLHAR E GUARDAR
  const { id } = useParams();
  const [index, setIndex] = useState([]);
  const [form, setForm] = useState({
    // ESSE OLHA O QUE O CARA TA ESCREVENDO E SERVE PRA ADICIONAR NA ARRAY PQ EH OBJ
    username: "",
    score: "",
    comments: "",
    indexNum: [index],
  });
  console.log(index);
  console.log(previousReviews[0]);
  console.log(previousReviews);

  useEffect(() => {
    async function fetchReview() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/mocked-beers/${id}`
        );
        console.log(response);
        setPreviousReviews([...response.data.reviews]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReview();
  }, [id]);

  const haveIndex = previousReviews.map((c) => {});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    //ESSE EH PRA GUARDAR ALTERACOOOOESSS
  };

  const indexOnClick = () => {
    setIndex(previousReviews.indexOf(previousReviews[index]));
    console.log(index);
  };

  const handleDelete = (review) => {
    const clone = { ...previousReviews };
    const newReview = clone.filter((currentReview) => {
      return review !== currentReview;
    });
    setPreviousReviews({ ...previousReviews, [review]: newReview });
  };

  //   const deleteEditTest = (review)=>{
  //     for (let i=0, i<previousReviews.length , i++ ){
  //         if (i === previousReviews[i-1]){
  //             const clone = { ...previousReviews };
  //     const newReview = clone.filter((currentReview) => {
  //       return review !== currentReview;
  //         }
  //         setPreviousReviews({ ...previousReviews, [review]: newReview })
  //     }
  //   }
  //   }

  //   const handleIndex = (e) => {};
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
      <form onSubmit={handleSubmit}>
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
          Qual a nota que você dá para esta cerveja?{" "}
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
          id="comments-input"
          value={form.comments}
          type="string"
          name="comments"
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary mb-3" type="submit">
          Envie seu review!
        </button>
      </form>

      {previousReviews.map((currentReview) => {
        return (
          <div id={previousReviews.indexOf(currentReview)}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{currentReview.username}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {currentReview.score}
                </h6>
                <p className="card-text">{currentReview.comments}</p>
              </div>
              <button
                className="btn btn-danger mb-3"
                type="button"
                onClick={indexOnClick}
              >
                Apague este review
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}