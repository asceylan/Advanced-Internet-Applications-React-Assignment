import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import moviesJson from "../components/data/movies.json";
class SearchJumbotron extends Component {
  state = {
    searchValue: [],
  };
  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  render() {
    return (
      <Jumbotron className="text-center col-md-12">
        <input
          type="text"
          placeholder="Search Text"
          className="form-control col-md-6 offset-md-3 col-sm-12 mt-3 mb-3"
          value={this.state.searchValue}
          onChange={(event) => this.handleOnChange(event)}
        />
        <ul className="text-left offset-md-3">
          {this.state.searchValue.length >= 1
            ? moviesJson
                .filter((movie) =>
                  movie.name.toLowerCase().includes(this.state.searchValue)
                )
                .map((movie, index) => {
                  return <li>{movie.name}</li>;
                })
            : ""}
        </ul>
      </Jumbotron>
    );
  }
}
export default SearchJumbotron;
