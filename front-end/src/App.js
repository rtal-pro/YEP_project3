import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
//import PrivateRoute from "./Routes/PrivateRoutes";
import GamingPage from "./Views/GamingPage.js";
import LandingPage from "./Views/LandingPage.js";
import receiver from "./Views/test.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact component={GamingPage} path="/game" />
          <Route exact component={LandingPage} path="/" />
          <Route exact component={receiver} path="/test" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
