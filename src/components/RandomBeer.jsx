import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";

const RandomBeer = () => {
  const [randBeer, setRandBeer] = useState([]);

  useEffect(() => {
    const renderRandom = async () => {
      const response = await Axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      console.log(response.data);
      setRandBeer(response.data);
    };
    renderRandom();
  }, []);
  return (
    <div className="random">
      <h1>Random Beer</h1>
      <img
        src={randBeer.image_url}
        alt={randBeer.name}
        style={{ height: "130px" }}
      />
      <h1>{randBeer.name}</h1>
      <p>{randBeer.tagline}</p>
      <h4>{randBeer.first_brewed}</h4>
      <h4>{randBeer.attenuation_level}</h4>
      <h6>{randBeer.description}</h6>
      <h3>{randBeer.contributed_by}</h3>
    </div>
  );
};

export default RandomBeer;
