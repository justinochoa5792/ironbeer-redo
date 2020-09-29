import React, { Component } from "react";
import Axios from "axios";

class NewBeer extends Component {
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitNewBeer = (e) => {
    e.preventDefault();
    Axios.post(
      "https://ih-beers-api2.herokuapp.com/beers/new",
      this.state
    ).then((response) => {
      alert(response.data.message);
    });
  };
  render() {
    return (
      <div className="newbeer">
        <h1>Create a New Beer!</h1>
        <form onSubmit={(e) => this.submitNewBeer(e)}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <input
            type="text"
            name="tagline"
            placeholder="tagline"
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <input
            type="text"
            name="description"
            placeholder="description"
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <input
            type="text"
            name="firstBrewed"
            placeholder="firstBrewed"
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <input
            type="text"
            name="brewerTips"
            placeholder="brewerTips"
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <input
            type="number"
            name="attenuationLevel"
            placeholder="attenuationLevel"
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <input
            type="text"
            name="contributedBy"
            placeholder="contributedBy"
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <input type="submit" /> <br />
        </form>
      </div>
    );
  }
}

export default NewBeer;
