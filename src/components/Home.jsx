import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Iron Beers</h1>
      <div className="container">
        <img src="/images/5.jpg" className="images" alt="beer-pic" />
        <Link to="/allbeers">
          {" "}
          <h2>All Beers</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
      </div>
      <div className="container">
        <img src="images/download-1.jpg" className="images" alt="beer-pic" />
        <Link to="/randombeer">
          <h2>Random Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
      </div>
      <div className="container">
        <img src="/images/download.jpg" className="images" alt="beer-pic" />
        <Link to="/newbeer">
          <h2>New Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
      </div>
    </div>
  );
}

export default Home;
