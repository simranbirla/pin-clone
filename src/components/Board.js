import React from "react";
import { connect } from "react-redux";

const Board = (props) => {
  return (
    <div>
      Board!! All the photos
      {props.auth.sign_in ? <div> Boards </div> : <h2> Please Login </h2>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Board);
