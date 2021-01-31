import React from "react";
import { Row, Col } from "../Grid";

function SearchedBooks(props) {
  console.log(props);
  return props.googlebooks.length > 0 ? (
    <div className="card">
      <div className="card-body">
        {props.googlebooks.map((book) => {
          return (
            <div className="card">
              <div className="card-body">
                <Row key={book.id}>

                  <Col size="12">
                    <Row>
                      <h3>
                        {book.title}
                      </h3>
                    </Row>
                    <Row>
                      <h5>
                        {book.author}
                      </h5>
                    </Row>
                    <Row>
                      <p>{book.description}</p>
                    </Row>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <a href={book.link} target="_blank">
                    <button className="btn d-flex align-items-center" style={{backgroundColor:'darkcyan', color:'ghostwhite'}}>Info</button>
                  </a>

                  <button
                    className="btn ml-2 d-flex align-items-center"
                    style={{backgroundColor:'darkcyan', color:'ghostwhite'}}
                    id={book.id}
                    onClick={(event) => props.handleSaveButton(event)}
                    >
                    Save
                  </button>
                </Row>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <h3 style={{color:'ghostwhite'}}>No Results to Display</h3>
  );
}
export default SearchedBooks;
