import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../redux/actions";
import login from "../Styling/login.svg";
import "../Styling/Login.css";

const Login = (props) => {
  return (
    <div className="login__page">
      <h2>Login with Google</h2>
      <img src={login} alt="login" />
      {props.auth.sign_in ? (
        <button onClick={props.signOut}>SignOut</button>
      ) : (
        <button onClick={props.signIn}>SignIn</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { signIn, signOut })(Login);
