import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      <Link to="/">Home</Link>
      <Link to="/photos">Photos</Link>
      <Search />
      <Link to="/board">Board</Link>
      <Link to="/feed">Feed</Link>
      <p>Simran</p>
    </div>
  );
};

export default Header;
