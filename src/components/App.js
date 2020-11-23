import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import history from "../history";
import Photos from "./Photos";
import Chat from "./Chat";
import Header from "./Header";
import Home from "./Home";
const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/photos" exact component={Photos} />
          <Route path="/chat" exact component={Chat} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
