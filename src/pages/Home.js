import React, { Component } from "react";
import Header from "../components/Header";
import SearchJumbotron from "../components/SearchJumbotron";
import MovieCard from "../components/MovieCard";

import moviesJson from "../components/data/movies.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: (localStorage.getItem("addMovie") != null)
        ? (moviesJson.concat (JSON.parse(localStorage.getItem("addMovie")) ))
        : (moviesJson)
    };
  }
  sortable = (event) => {
    switch (event.target.value) {
      case "nameAtoZ":
        this.setState({
          movies: this.state.movies.sort(function (a, b) {
            return a.name.localeCompare(b.name);
          }),
        });
        break;
      case "rating9to1":
        this.setState({
          movies: this.state.movies.sort(function (a, b) {
            return b.Rating.localeCompare(a.Rating);
          }),
        });
        break;
      case "rating1to9":
        this.setState({
          movies: this.state.movies.sort(function (a, b) {
            return a.Rating.localeCompare(b.Rating);
          }),
        });
        break;

      default:
        this.setState({
          movies: moviesJson,
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <Header />
        <SearchJumbotron />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <select
                className=" col-md-3 offset-md-9 col-sm-12 form-control"
                onChange={this.sortable}
              >
                <option value="nameAtoZ">Name (A .. Z)</option>
                <option value="rating9to1" selected>
                  Rating (9 .. 1)
                </option>
                <option value="rating1to9">Rating (1 .. 9)</option>
              </select>
            </div>
            {this.state.movies.map((movie, index) => {
              return (
                <MovieCard
                  id={index}
                  image={movie.img}
                  name={movie.name}
                  description={movie.description.substr(0, 300) + "..."}
                  rating={movie.Rating}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
