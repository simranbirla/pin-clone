import React, { useState } from "react";
import history from "../history";
import { connect } from "react-redux";
import { searchTerm, getPhotos, increasePage } from "../redux/actions";

const Search = (props) => {
  const [term, setTerm] = useState();

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.searchTerm(term);
    props.getPhotos(term, props.page);
    props.increasePage();
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
  //console.log(state);
  return { page: state.search.page };
};

export default connect(mapStateToProps, {
  searchTerm,
  getPhotos,
  increasePage,
})(Search);
