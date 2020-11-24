import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../redux/actions";

const Login = (props) => {
  return (
    <div>
      Login with Google
      {props.auth.sign_in ? (
        <button onClick={props.signOut}>SignOut</button>
      ) : (
        <button onClick={props.signIn}>SignIn</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.auth);
  return { auth: state.auth };
};

export default connect(mapStateToProps, { signIn, signOut })(Login);
