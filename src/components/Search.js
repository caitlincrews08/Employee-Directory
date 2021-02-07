import React from "react";

function Search(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search employees"
          id="search"
        />
      </div>
    </form>
  );
}

export default Search;