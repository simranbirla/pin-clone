import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import history from "../history";
import Photos from "./Photos";
import Search from "./Search";

const App = () => {
  return (
    <div>
      App
      <Search />
      <Router history={history}>
        <Switch>
          <Route path="/photos" exact component={Photos} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
