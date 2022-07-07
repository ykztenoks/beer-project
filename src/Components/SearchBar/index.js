import axios from "axios";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import style from "./style.module.css";

export function SearchBar() {
  const [beerList, setBeerList] = useState([]);
  const navigate = useNavigate();

  function handleSelect(e) {
    navigate(`/beer-detail/${e.value}`);
  }

  function styleFunction(provided, state) {
    return { ...provided, color: state.isFocused ? "blue" : "red" };
  }

  useEffect(() => {
    async function fetchBeer() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/mocked-beers`
        );
        setBeerList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBeer();
  }, []);

  const options = beerList.map((current) => {
    return {
      value: `${current._id}`,
      label: current.name,
    };
  });

  return (
    <div className={style.select}>
      <Select
        options={options}
        onChange={handleSelect}
        styles={styleFunction}
        placeholder="Procurar cerveja perfeita...👌"
      />
    </div>
  );
}
