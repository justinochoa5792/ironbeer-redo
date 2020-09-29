import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function AllBeers(props) {
  return (
    <div className="allbeers">
      <h1>All Beers</h1>
      {props.beers.map((eachBeer) => {
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
