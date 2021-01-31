import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group" >
        <label>
          <h2 className="mt-5" >Search for Books</h2>
        </label>
        <br></br>
        <input
          className="col-12 form-control"
          value={props.search}
          type="text"
          name="search"
          placeholder="Input the desired book"
          onChange={props.handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-light"
        style={{backgroundColor:'darkturquoise', color:'white'}}
        onClick={props.handleFormSubmit}
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
