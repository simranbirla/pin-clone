import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { connect } from "react-redux";
import { signIn } from "../redux/actions";

const Header = ({ auth, signIn }) => {
  return (
    <div style={{ display: "flex" }}>
      <Link to="/">Home</Link>
      <Search />
      <Link to="/board">Board</Link>
      <Link to="/feed">Feed</Link>

      {auth.sign_in ? (
        <>
          <div>
            <img
              src={auth.user.photoURL}
              style={{ width: "50px", height: "50px" }}
              alt="profile-picture"
            />
            <p>{auth.user.displayName}</p>{" "}
          </div>

          <Link to="/login">
            <button>SignOut</button>
          </Link>
        </>
      ) : (
        <button onClick={signIn}>LogIn</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { signIn })(Header);
