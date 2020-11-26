import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import history from "../history";
import Photos from "./Photos";
import Chat from "./Chat";
import Header from "./Header";
import Home from "./Home";
import Feed from "./Feed";
import Login from "./Login";
import Board from "./Board";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/photos" exact component={Photos} />
          <Route path="/chat" exact component={Chat} />
          <Route path="/" exact component={Home} />
          <Route path="/feed" exact component={Feed} />
          <Route path="/login" exact component={Login} />
          <Route path="/board" exact component={Board} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
