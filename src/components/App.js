import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import history from "../history";
import Photos from "./Photos";
import Search from "./Search";

const App = () => {
  return (
    <div>
      App
      <Router history={history}>
        <Switch>
          <Route path="/photos" exact component={Photos} />
          <Route path="/search" exact component={Search} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
