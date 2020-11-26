import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { connect } from "react-redux";
import { signIn } from "../redux/actions";
import "../Styling/Header.css";

const Header = ({ auth, signIn }) => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/board">Board</Link>
      <Link to="/feed">Feed</Link>
      <Search />
      {auth.sign_in ? (
        <div className="header__sign">
          <div className="header__user">
            <img src={auth.user.photoURL} alt="profile-user" />
            <span>{auth.user.displayName}</span>
          </div>

          <Link to="/login">LogOut</Link>
        </div>
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
