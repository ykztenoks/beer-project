import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ReviewForm() {
  const { id } = useParams();
  const [form, setForm] = useState({
    username: "",
    score: "",
    comments: "",
  });

  console.log(form);

  useEffect(() => {
    async function fetchReview() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/mocked-beers/${id}`
        );
        console.log(response);
        setForm({ ...response.data.reviews });
      } catch (error) {
        console.log(error);
      }
    }
    fetchReview();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const clone = { ...form };
      delete clone._id;
      await axios.put(
        `https://ironrest.herokuapp.com/mocked-beers/${id}`,
        clone
      );
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
        <button className="btn btn-primary mt-3" type="submit">
          Envie seu review!
        </button>
      </form>
    </>
  );
}
