import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/main/:id" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
