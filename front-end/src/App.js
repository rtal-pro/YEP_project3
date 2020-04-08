import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
//import PrivateRoute from "./Routes/PrivateRoutes";
import LandingPage from "./Views/LandingPage.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact component={LandingPage} path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
