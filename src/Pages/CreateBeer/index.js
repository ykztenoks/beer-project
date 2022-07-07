import { useState } from "react";
import axios from "axios";
import { ButtonBack } from "../../Components/ButtonBack";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export function CreateBeer() {
  const [form, setForm] = useState({
    logo: "",
    name: "",
    ibu: "",
    country: "",
    style: "",
    abv: "",
    description: "",
    ideal_temp: "",
    year: "",
    pair: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://ironrest.herokuapp.com/mocked-beers", form);
      toast.success("Sua cerveja foi adicionada!");
      navigate("/beer-list");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={style.createbeer}>
      <Toaster />

      <Link to="/beer-list">
        <button className={`btn-warning ${style.btn1}`}>Voltar</button>
      </Link>
      <div className={style.textblock}>
        <h1>Adicione suas cervejas preferidas na nossa lista!</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="img-input">Adicione o logo da cerveja! (URL)</label>
          <input
            id="img-input"
            value={form.logo}
            type="string"
            name="logo"
            onChange={handleChange}
            required
          />
          <label htmlFor="name-input">Nome da cerveja</label>
          <input
            id="name-input"
            value={form.name}
            type="string"
            name="name"
            onChange={handleChange}
            required
          />
          <label htmlFor="ibu-input">IBU da cerveja (Índice de amargor)</label>
          <input
            id="ibu-input"
            value={form.ibu}
            type="number"
            name="ibu"
            onChange={handleChange}
            max="9999"
            required
          />
          <label htmlFor="country-input">Em que país foi criada?</label>
          <input
            id="country-input"
            value={form.country}
            type="string"
            name="country"
            onChange={handleChange}
            required
          />
          <label htmlFor="style-input">Estilo da cerveja</label>
          <input
            id="style-input"
            value={form.style}
            type="string"
            name="style"
            onChange={handleChange}
            required
          />
          <label htmlFor="abv-input">ABV (Teor alcóolico)</label>
          <input
            id="abv-input"
            value={form.abv}
            type="number"
            name="abv"
            onChange={handleChange}
            required
            max="100"
          />
          <label htmlFor="description-input">
            Comente um pouco sobre a cerveja
          </label>
          <input
            className={style.comment}
            id="description-input"
            value={form.description}
            type="string"
            name="description"
            onChange={handleChange}
            required
          />
          <label htmlFor="year-input">Em qual ano foi criada?</label>
          <input
            id="year-input"
            value={form.year}
            type="number"
            name="year"
            onChange={handleChange}
            max="2022"
            required
          />
          <label htmlFor="pair-input">Harmoniza bem com?</label>
          <input
            id="pair-input"
            value={form.pair}
            type="string"
            name="pair"
            onChange={handleChange}
            required
          />
          <button className="btn btn-warning mt-3" type="submit">
            Adicionar Cerveja!
          </button>
        </form>
      </div>
    </div>
  );
}
