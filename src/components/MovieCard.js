import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class MovieCard extends Component {
  render() {
    const toMovieEdit = {
      pathname: `/update/${this.props.id}`
    };

    return (
      <div className="col-md-4 col-sm-12 p-3" id={"movie"+this.props.id}>
        <Card className="col-md-12">
          <Card.Img variant="top" src={this.props.image} height="450" />
          <Card.Body>
            <Card.Title className="font-weight-bold">
              {this.props.name}
            </Card.Title>
            <Card.Text>
              <p className="font-weight-bold">
                Rating:{" "}
                <span className="font-italic font-weight-normal pl-2">
                  {this.props.rating}
                </span>
              </p>
              {this.props.description}
            </Card.Text>
            <div className="col-md-12">
              <Link
              className="btn btn-primary col-md-5 col-sm-12 mt-1"
              to={toMovieEdit}>
                        Edit
                      </Link>
              <Button
                variant="danger"
                onClick={() => document.getElementById("movie"+this.props.id).remove()}
                className="col-md-5 offset-md-2 col-sm-12 mt-1"
              >
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MovieCard;
