import React, { Component } from "react";
import Header from "../components/Header";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import moviesJson from "../components/data/movies.json";

class Update extends Component {
  constructor(props) {
    super(props);
    this.movie = moviesJson[this.props.match.params.id];
    this.state = {
      file: this.movie.img,
      name: this.movie.name,
      description: this.movie.description,
      rating: this.movie.Rating,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };
  handleRatingChange = (e) => {
    this.setState({ rating: e.target.value });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row mt-5">
            <Card className="col-md-12 mb-2">
              <div className="text-center col-md-12 font-weight-bolder h2">
                {this.state.name}
              </div>
            </Card>
            <Card className="col-md-12">
              <Card.Body>
                <Form>
                  <Card.Text>
                    <Form.Group controlId="moviePhoto" className="mb-3">
                      <Form.Label className="col-md-12">Movie Photo</Form.Label>
                      <Image
                        src={this.state.file}
                        rounded
                        className="col-md-3"
                      />
                      <Form.Control
                        type="file"
                        name="moviePhoto"
                        onChange={this.handleChange}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="movieName">
                      <Form.Label>Movie Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.name}
                        name="movieName"
                        onChange={this.handleNameChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="movieDescription">
                      <Form.Label>Movie Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        type="text"
                        name="movieDescription"
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="movieRating">
                      <Form.Label>Movie Rating</Form.Label>
                      <Form.Control
                        type="number"
                        value={this.state.rating}
                        step="0.1"
                        name="movieRating"
                        onChange={this.handleRatingChange}
                      />
                    </Form.Group>
                  </Card.Text>
                  {this.props.match.params.result === "success" ? (
                    <Alert
                      className="col-md-12"
                      key="success"
                      variant={this.props.match.params.result}
                    >
                      Successfully updated.
                      <Alert.Link href="/" className="pl-1">
                        Go to Home page
                      </Alert.Link>
                    </Alert>
                  ) : (
                    ""
                  )}

                  <Link
                    className="btn btn-primary col-md-2 offset-md-10 col-sm-12"
                    to={{
                      pathname:
                        "/update/" +
                        this.props.match.params.id +
                        "/?result=success",
                    }}
                  >
                    Update
                  </Link>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default Update;
