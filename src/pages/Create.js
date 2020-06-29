import React, { Component } from "react";
import Header from "../components/Header";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import moviesJson from "../components/data/movies.json";

class Create extends Component {
  constructor(props) {
    super(props);
    this.movie = moviesJson[this.props.match.params.id];
    this.state = {
      file: null,
      fileBase64: null,
      name: "",
      description: "",
      rating: "",
      result: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleImageChange = (e) => {
    this.setState({ image: e.target.value });
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };
  handleRatingChange = (e) => {
    this.setState({ rating: e.target.value });
  };

  addRequest = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      return reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
      fileBase64: event.target.files[0],
    });
  }

addMovie = (img, movie, desc,rating) => {
  localStorage.setItem(
    "addMovie",
    JSON.stringify(
      {
        img: img,
        name: movie,
        description: desc,
        Rating: rating,
      },
    )
  );
}
 handleLogin =async  (e) => {
  var reader = new FileReader();
  reader.readAsDataURL(this.state.fileBase64);
  reader.onload = this.addMovie(reader.result, "asd", "asddd", "asddasdasd");
  reader.onload = () => {
    this.setState({fileBase64: reader.result});
    this.addMovie(this.state.fileBase64, this.state.name, this.state.description, this.state.rating);
        this.setState({result:"success"});
  };
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row mt-5">
            <Card className="col-md-12 mb-2">
              <div className="text-center col-md-12 font-weight-bolder h2">
                New Movie
              </div>
            </Card>
            <Card className="col-md-12">
              <Card.Body>
                <Form>
                  <Card.Text>
                    <Form.Group controlId="moviePhoto" className="mb-3">
                      <Form.Label className="col-md-12">Movie Photo</Form.Label>
                      <Image
                        id="imgPreview"
                        src={this.state.file}
                        rounded
                        className="col-md-3"
                      />
                      <Form.Control
                      required
                        type="file"
                        name="moviePhoto"
                        onChange={this.handleChange}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="movieName">
                      <Form.Label>Movie Name</Form.Label>
                      <Form.Control
                      required
                        type="text"
                        name="movieName"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="movieDescription">
                      <Form.Label>Movie Description</Form.Label>
                      <Form.Control
                      required
                        as="textarea"
                        type="text"
                        name="movieDescription"
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="movieName">
                      <Form.Label>Movie Rating</Form.Label>
                      <Form.Control
                      required
                        type="number"
                        step="0.1"
                        name="movieRating"
                        value={this.state.rating}
                        onChange={this.handleRatingChange}
                      />
                    </Form.Group>
                  </Card.Text>
                  {this.state.result === "success" ? (
                    <Alert
                      className="col-md-12"
                      key="success"
                      variant={this.state.result}
                    >
                      Successfully added.
                      <Alert.Link href="/" className="pl-1">
                        Go to Home page
                      </Alert.Link>
                    </Alert>
                  ) : (
                    ""
                  )}

                  <Link
                    className="btn btn-primary col-md-2 offset-md-10 col-sm-12"
                    onClick={this.handleLogin}
                  >
                    Add
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
export default Create;
