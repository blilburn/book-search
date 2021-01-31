import React from "react";
import { Row, Col } from "../Grid";


function SavedBooks(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="card-body">
        {props.savedbooks.map((book) => {
          return (
            <div className="card">
              <div className="card-body">
                <Row key={book._id}>
                  <Col size="10">
                    <Row>
                      <h3>{book.title}</h3>
                    </Row>
                    <Row>
                      <h5>{book.authors}</h5>
                    </Row>
                    <Row>
                      <p>{book.description}</p>
                    </Row>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <a href={book.link} target="_blank">
                    <button className="btn" style={{backgroundColor:'darkcyan', color:'ghostwhite'}}>Info</button>
                  </a>

                  <button
                    className="btn ml-2"
                    id={book._id}
                    onClick={() => props.handleDeleteButton(book._id)}
                    style={{backgroundColor:'darkcyan', color:'ghostwhite'}}
                  >
                    Delete
                  </button>
                </Row>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SavedBooks;
