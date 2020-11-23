import React, { useState } from "react";
import history from "../history";
import { connect } from "react-redux";
import {
  searchTerm,
  getPhotos,
  clearPhotos,
  clearPage,
} from "../redux/actions";

const Search = (props) => {
  const [term, setTerm] = useState();

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.searchTerm(term);
    props.clearPage();
    props.clearPhotos();
    props.getPhotos(term, props.page);
    history.push("/photos");
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Search photos..."
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { page: state.search.page };
};

export default connect(mapStateToProps, {
  searchTerm,
  getPhotos,
  clearPhotos,
  clearPage,
})(Search);
