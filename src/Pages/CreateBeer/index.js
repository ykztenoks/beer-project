import { useState, useEffect } from "react";
import axios from "axios";

export function CreateBeer() {
  const [form, setForm] = useState({
    name: "",
    ibu: "",
    country: "",
    style: "",
    abv: "",
    description: "",
    ideal_temp: "",
    year: "",
    pair: "",
    reviews: "",
  });

  return (
    <div>
      <h1>Create Beer</h1>
    </div>
  );
}
