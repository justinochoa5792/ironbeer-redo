import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";

function AllBeers() {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    const renderBeer = async () => {
      const response = await Axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(response.data);
      setBeer(response.data);
    };
    renderBeer();
  }, []);
  return (
    <div className="allbeers">
      <h1>All Beers</h1>
      {beer.map((eachBeer) => {
        return (
          <ul>
            <li>
              <img
                src={eachBeer.image_url}
                style={{ width: "90px" }}
                alt={eachBeer.name}
              />
            </li>
            <li>
              <h2>{eachBeer.name}</h2>
            </li>
            <li>Created By: {eachBeer.name}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default AllBeers;
