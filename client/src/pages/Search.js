import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchedBooks";
import Jumbotron from "../components/Jumbotron";

class SearchBooks extends Component {
  state = {
    search: "",
    googlebooks: [],
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getGoogleBooks(this.state.search).then((res) => {
      let books = res.data.items.map((result) => {
        result = {
          key: result.id,
          id: result.id,
          title: result.volumeInfo.title,
          author: result.volumeInfo.authors,
          description: result.volumeInfo.description,
          link: result.volumeInfo.infoLink,
        };
        return result;
      });
      this.setState({ googlebooks: books });
    });
  };

  handleSaveButton = (event) => {
    event.preventDefault();
    let bookData = this.state.googlebooks.filter(
      (book) => book.id === event.target.id
    );
    API.saveBook(bookData)
      .then(this.setState({ message: alert("Your book is saved") }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron>
        <h1>Find and Save your Favorite Books at the Click of a Button!</h1>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="12">
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container>
          <SearchResult
            googlebooks={this.state.googlebooks}
            handleSaveButton={this.handleSaveButton}
          />
        </Container>
      </div>
    );
  }
}

export default SearchBooks;
